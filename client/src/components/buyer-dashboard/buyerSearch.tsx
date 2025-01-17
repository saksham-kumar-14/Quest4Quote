import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios'

interface Product{
    id: string,
    name: string,
    VendorIDs: string[],
    VendorNames: string[]
}

const BuyerSearch: React.FC = () => {

    const navigate = useNavigate();

    const { user, 
    } = useAuth();

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {

        async function getProducts(){
            const res = await axios.get('http://localhost:3001/products');
            const data = res.data;
            setProducts(data);
        }

        if(user){
            if(user.type != 'buyer'){
                navigate('/')
            }else{
                getProducts();
            }
        }else navigate('/')
    }, user);

    return(
        <>
            <nav>
                <button onClick={() => navigate('/')}>
                    <IoArrowBack className="texl-3xl"/>
                </button>
                
            </nav>

            <div>
                {products.map((product) => {
                    return(
                        <div>
                            <p>Name: {product.name}</p>
                            <p>Vendor Names: </p>
                            {
                                product.VendorIDs.map((e, idx) => {
                                    return(
                                        <a
                                        onClick={() => {
                                            navigate(`/vendor/${e}`)
                                        }}
                                        className="cursor-pointer">
                                            {product.VendorNames[idx]}
                                        </a>
                                    )
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BuyerSearch;