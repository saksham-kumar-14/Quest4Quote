package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/golang-jwt/jwt/v5"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
)

var (
	VendorsCollection *mongo.Collection
	BuyersCollection  *mongo.Collection
	ProductCollection *mongo.Collection
	ctx               = context.Background()
)

type Buyer struct {
	ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Name             string             `json:"name"`
	Email            string             `json:"email"`
	OrganizationName string             `json:"organizationName"`
	PhoneNumber      string             `json:"phoneNumber"`
	Password         string             `json:"password"`
}

type Vendor struct {
	ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Name             string             `json:"name"`
	Email            string             `json:"email"`
	OrganizationName string             `json:"organizationName"`
	PhoneNumber      string             `json:"phoneNumber"`
	Password         string             `json:"password"`
	WebsiteUrl       string             `json:"websiteUrl"`
	MainAddr         string             `json:"mainAddr"`
	AltAddr          string             `json:"altAddr"`
	About            string             `json:"about"`
}

type Product struct {
	ID          primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Name        string             `json:"name"`
	VendorIDs   []string           `json:"VendorIDs"`
	VendorNames []string           `json:"VendorNames"`
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Loading mongodb uri
	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client, err := mongo.Connect(ctx, clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(ctx)

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to Database")

	BuyersCollection = client.Database("db1").Collection("buyers")
	VendorsCollection = client.Database("db1").Collection("vendors")
	ProductCollection = client.Database("db1").Collection("products")

	// initialising app and using cors
	app := fiber.New()
	app.Use(cors.New())

	// Request Endpoints
	app.Get("/vendors", handleGetVendors)
	app.Get("/buyers", handleGetBuyers)
	app.Post("/vendor", handleCreateVendors)
	app.Post("/buyer", handleCreateBuyers)
	app.Delete("/vendor/:id", handleVendorDeletion)
	app.Delete("/buyer/:id", handleBuyerDeletion)
	app.Put("/updateVendor/:id", handleVendorUpdation)
	app.Put("/updateBuyer/:id", handleBuyerUpdation)
	app.Post("/login/vendor", VendorLogin)
	app.Post("/login/buyer", BuyerLogin)
	app.Get("/api/login/vendor", VendorLoginApi)
	app.Get("/api/login/buyer", BuyerLoginApi)
	app.Get("/products", handleGetProducts)
	app.Get("/vendor/:id", handleGetSpecificVendor)

	// listening
	port := os.Getenv("PORT")
	log.Fatal(app.Listen("0.0.0.0:" + port))

}

func handleGetSpecificVendor(c *fiber.Ctx) error {
	id := c.Params("id")

	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"found": "false",
			"error": "Invalid ID format",
		})
	}

	var result Vendor
	err = VendorsCollection.FindOne(ctx, bson.M{"_id": objectID}).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"found": "false",
				"error": "User not found",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"found": "false",
			"error": "Failed to fetch user",
		})
	}

	return c.Status(200).JSON(fiber.Map{"found": "true", "id": result.ID, "name": result.Name,
		"phone": result.PhoneNumber, "OrganizationName": result.OrganizationName, "email": result.Email})

}

func handleGetProducts(c *fiber.Ctx) error {
	var products []Product

	cursor, err := ProductCollection.Find(ctx, bson.M{})
	if err != nil {
		return err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var product Product
		if err := cursor.Decode(&product); err != nil {
			return err
		}
		products = append(products, product)
	}

	return c.JSON(products)
}

func handleGetBuyers(c *fiber.Ctx) error {
	type BuyerApi struct {
		ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
		Name             string             `json:"name"`
		Email            string             `json:"email"`
		OrganizationName string             `json:"organizationName"`
		PhoneNumber      string             `json:"phoneNumber"`
	}

	var users []BuyerApi

	cursor, err := BuyersCollection.Find(ctx, bson.M{})
	if err != nil {
		return err
	}

	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var user BuyerApi
		if err := cursor.Decode(&user); err != nil {
			return err
		}
		users = append(users, user)
	}

	return c.JSON(users)
}

func handleGetVendors(c *fiber.Ctx) error {
	type VendorApi struct {
		ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
		Name             string             `json:"name"`
		Email            string             `json:"email"`
		OrganizationName string             `json:"organizationName"`
		PhoneNumber      string             `json:"phoneNumber"`
	}

	var users []VendorApi

	cursor, err := VendorsCollection.Find(ctx, bson.M{})
	if err != nil {
		return err
	}

	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var user VendorApi
		if err := cursor.Decode(&user); err != nil {
			return err
		}
		users = append(users, user)
	}

	return c.JSON(users)
}

func handleCreateBuyers(c *fiber.Ctx) error {
	buyer := new(Buyer)
	if err := c.BodyParser(buyer); err != nil {
		return err
	}

	if buyer.Name == "" || buyer.Email == "" || buyer.OrganizationName == "" || buyer.PhoneNumber == "" || buyer.Password == "" {
		return c.Status(400).JSON(fiber.Map{
			"message": "All fields are required",
		})
	}

	insRes, err := BuyersCollection.InsertOne(ctx, buyer)
	if err != nil {
		return err
	}
	buyer.ID = insRes.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(fiber.Map{"status": "ok"})

}

func handleCreateVendors(c *fiber.Ctx) error {
	vendor := new(Vendor)
	if err := c.BodyParser(vendor); err != nil {
		return err
	}

	if vendor.Name == "" || vendor.Email == "" || vendor.OrganizationName == "" || vendor.PhoneNumber == "" || vendor.Password == "" {
		return c.Status(400).JSON(fiber.Map{
			"message": "All fields are required",
		})
	}

	insRes, err := VendorsCollection.InsertOne(ctx, vendor)
	if err != nil {
		return err
	}
	vendor.ID = insRes.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(fiber.Map{"status": "ok"})
}

func handleVendorDeletion(c *fiber.Ctx) error {
	id := c.Params("id")
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"err": "Invalid Vendor ID"})
	}

	filter := bson.M{"_id": objectId}
	_, err = VendorsCollection.DeleteOne(ctx, filter)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "deleted": true})
}

func handleBuyerDeletion(c *fiber.Ctx) error {
	id := c.Params("id")
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"err": "Invalid Buyer ID"})
	}

	filter := bson.M{"_id": objectId}
	_, err = BuyersCollection.DeleteOne(ctx, filter)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "deleted": true})
}

func handleVendorUpdation(c *fiber.Ctx) error {
	id := c.Params("id")

	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"found": "false",
			"error": "Invalid ID format",
		})
	}

	var updateData map[string]interface{}
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"found": "false",
			"error": "Invalid request body",
		})
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{
		"$set": updateData,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	result, err := VendorsCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"found": "false",
			"error": "Failed to update user",
		})
	}

	return c.JSON(fiber.Map{
		"matchedCount":  result.MatchedCount,
		"modifiedCount": result.ModifiedCount,
	})
}

func handleBuyerUpdation(c *fiber.Ctx) error {

	id := c.Params("id")

	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"found": "false",
			"error": "Invalid ID format",
		})
	}

	var updateData map[string]interface{}
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"found": "false",
			"error": "Invalid request body",
		})
	}

	filter := bson.M{"_id": objectID}
	update := bson.M{
		"$set": updateData,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	result, err := VendorsCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"found": "false",
			"error": "Failed to update user",
		})
	}

	return c.JSON(fiber.Map{
		"matchedCount":  result.MatchedCount,
		"modifiedCount": result.ModifiedCount,
	})
}

func VendorLogin(c *fiber.Ctx) error {

	type loginCreds struct {
		Email string `json:"email"`
	}

	type Password struct {
		Password string `json:"password"`
	}

	creds := new(loginCreds)
	if err := c.BodyParser(creds); err != nil {
		return err
	}

	pwd := new(Password)
	if err := c.BodyParser(pwd); err != nil {
		return err
	}

	var result Vendor
	err := VendorsCollection.FindOne(ctx, creds).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return c.Status(400).JSON(fiber.Map{"error": "No such Vendor found"})
		}
		return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	bytePwd := []byte(pwd.Password)
	hashedPassword := []byte(result.Password)
	err = bcrypt.CompareHashAndPassword(hashedPassword, bytePwd)

	if err != nil {
		fmt.Println(err)
		return c.Status(400).JSON(fiber.Map{"error": "No such Vendor found"})
	}

	// implementing JSON Web Tokens
	err = godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}
	secretKey := []byte(os.Getenv("SECRET_KEY"))

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": result.Email,
		"exp":   time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		fmt.Println(err)
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "token": tokenString})
}

func BuyerLogin(c *fiber.Ctx) error {

	type loginCreds struct {
		Email string `json:"email"`
	}

	type Password struct {
		Password string `json:"password"`
	}

	creds := new(loginCreds)
	if err := c.BodyParser(creds); err != nil {
		return err
	}

	pwd := new(Password)
	if err := c.BodyParser(pwd); err != nil {
		return err
	}

	var result Buyer
	err := BuyersCollection.FindOne(ctx, creds).Decode(&result)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return c.Status(400).JSON(fiber.Map{"error": "No such Buyer found"})
		}
		return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
	}

	bytePwd := []byte(pwd.Password)
	hashedPassword := []byte(result.Password)
	err = bcrypt.CompareHashAndPassword(hashedPassword, bytePwd)

	if err != nil {
		fmt.Println(err)
		return c.Status(400).JSON(fiber.Map{"error": "No such Buyer found"})
	}

	// implementing JSON Web Tokens
	err = godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}
	secretKey := []byte(os.Getenv("SECRET_KEY"))

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": result.Email,
		"exp":   time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		fmt.Println(err)
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "token": tokenString})
}

func VendorLoginApi(c *fiber.Ctx) error {
	// implementing JSON Web Tokens
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}
	secretKey := []byte(os.Getenv("SECRET_KEY"))

	token := c.Get("token")
	tokenForm, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid Token"})
	}

	if claims, ok := tokenForm.Claims.(jwt.MapClaims); ok && tokenForm.Valid {

		email := claims["email"].(string)

		var result Vendor
		err := VendorsCollection.FindOne(ctx, bson.M{"email": email}).Decode(&result)
		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.Status(400).JSON(fiber.Map{"error": "No such vendor found"})
			}
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}

		return c.Status(200).JSON(fiber.Map{"status": "ok", "id": result.ID, "email": result.Email, "type": "vendor", "organizationName": result.OrganizationName, "name": result.Name, "phone": result.PhoneNumber})

	}

	return c.Status(400).JSON(fiber.Map{"error": "Invalid Token"})
}

func BuyerLoginApi(c *fiber.Ctx) error {
	// implementing JSON Web Tokens
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
		return c.Status(500).JSON(fiber.Map{"error": "Internal server error"})
	}
	secretKey := []byte(os.Getenv("SECRET_KEY"))

	token := c.Get("token")
	tokenForm, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		return secretKey, nil
	})

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid Token"})
	}

	if claims, ok := tokenForm.Claims.(jwt.MapClaims); ok && tokenForm.Valid {

		email := claims["email"].(string)

		var result Buyer
		err := BuyersCollection.FindOne(ctx, bson.M{"email": email}).Decode(&result)
		if err != nil {
			if err == mongo.ErrNoDocuments {
				return c.Status(400).JSON(fiber.Map{"error": "No such buyer found"})
			}
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}

		return c.Status(200).JSON(fiber.Map{"status": "ok", "id": result.ID, "email": result.Email, "type": "buyer", "organizationName": result.OrganizationName, "name": result.Name, "phone": result.PhoneNumber})

	}

	return c.Status(400).JSON(fiber.Map{"error": "Invalid Token"})
}
