package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var VendorsCollection *mongo.Collection
var BuyersCollection *mongo.Collection

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Loading mongodb uri
	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client, err := mongo.Connect(context.Background(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	defer client.Disconnect(context.Background())

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to Database")

	BuyersCollection = client.Database("db1").Collection("buyers")
	VendorsCollection = client.Database("db1").Collection("vendors")

	// initialising app and using cors
	app := fiber.New()
	app.Use(cors.New())

	// Request Endpoints
	app.Get("/Vendors", handleGetVendors)
	app.Get("/Buyers", handleGetBuyers)
	app.Post("/Vendors", handleCreateVendors)
	app.Post("/Buyers", handleCreateBuyers)
	app.Delete("/Vendors/:id", handleVendorDeletion)
	app.Delete("/Buyers/:id", handleBuyerDeletion)
	app.Post("/updateVendor", handleVendorUpdation)
	app.Post("/updateBuyer", handleBuyerUpdation)

	// listening
	port := os.Getenv("PORT")
	log.Fatal(app.Listen("0.0.0.0:" + port))

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

	cursor, err := BuyersCollection.Find(context.Background(), bson.M{})
	if err != nil {
		return err
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
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

	cursor, err := VendorsCollection.Find(context.Background(), bson.M{})
	if err != nil {
		return err
	}

	defer cursor.Close(context.Background())

	for cursor.Next(context.Background()) {
		var user VendorApi
		if err := cursor.Decode(&user); err != nil {
			return err
		}
		users = append(users, user)
	}

	return c.JSON(users)
}

func handleCreateBuyers(c *fiber.Ctx) error {
	type Buyer struct {
		ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
		Name             string             `json:"name"`
		Email            string             `json:"email"`
		OrganizationName string             `json:"organizationName"`
		PhoneNumber      string             `json:"phoneNumber"`
		Password         string             `json:"password"`
	}
	buyer := new(Buyer)
	if err := c.BodyParser(buyer); err != nil {
		return err
	}

	if buyer.Name == "" || buyer.Email == "" || buyer.OrganizationName == "" || buyer.PhoneNumber == "" || buyer.Password == "" {
		return c.Status(400).JSON(fiber.Map{
			"message": "All fields are required",
		})
	}

	insRes, err := BuyersCollection.InsertOne(context.Background(), buyer)
	if err != nil {
		return err
	}
	buyer.ID = insRes.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(fiber.Map{"status": "ok"})

}

func handleCreateVendors(c *fiber.Ctx) error {
	type Vendor struct {
		ID               primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
		Name             string             `json:"name"`
		Email            string             `json:"email"`
		OrganizationName string             `json:"organizationName"`
		PhoneNumber      string             `json:"phoneNumber"`
		Password         string             `json:"password"`
	}
	vendor := new(Vendor)
	if err := c.BodyParser(vendor); err != nil {
		return err
	}

	if vendor.Name == "" || vendor.Email == "" || vendor.OrganizationName == "" || vendor.PhoneNumber == "" || vendor.Password == "" {
		return c.Status(400).JSON(fiber.Map{
			"message": "All fields are required",
		})
	}

	insRes, err := VendorsCollection.InsertOne(context.Background(), vendor)
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
	_, err = VendorsCollection.DeleteOne(context.Background(), filter)
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
	_, err = BuyersCollection.DeleteOne(context.Background(), filter)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "deleted": true})
}

func handleVendorUpdation(c *fiber.Ctx) error {

	type UpdateReq struct {
		ID          primitive.ObjectID `json:"id"`
		Name        string             `json:"name"`
		Email       string             `json:"email"`
		PhoneNumber string             `json:"phoneNumber"`
	}

	var body UpdateReq
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Failed to parse request body",
		})
	}

	filter := bson.M{"_id": body.ID}
	update := bson.M{"$set": bson.M{"name": body.Name, "email": body.Email, "phoneNumber": body.PhoneNumber}}
	_, err := VendorsCollection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err})
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "updated": true})
}

func handleBuyerUpdation(c *fiber.Ctx) error {

	type UpdateReq struct {
		ID          primitive.ObjectID `json:"id"`
		Name        string             `json:"name"`
		Email       string             `json:"email"`
		PhoneNumber string             `json:"phoneNumber"`
	}

	var body UpdateReq
	if err := c.BodyParser(&body); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Failed to parse request body",
		})
	}

	filter := bson.M{"_id": body.ID}
	update := bson.M{"$set": bson.M{"name": body.Name, "email": body.Email, "phoneNumber": body.PhoneNumber}}
	_, err := BuyersCollection.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err})
	}

	return c.Status(200).JSON(fiber.Map{"status": "ok", "updated": true})
}
