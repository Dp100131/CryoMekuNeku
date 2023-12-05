import React, { useState } from "react";
import { AddToCartIcon } from "../Icons";
import './index.css';
import { formatNumberToCurrency } from "../../util"
import { Filters } from "../Filtro";
import { useAuth } from "../../Provider/Auth";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Provider/Cart";

export function Products({ products }) {

    const { isLogin } = useAuth();
    const { createCartForUser  } = useCart();
    const navigate = useNavigate();

    const addToCart = (gameId) => {
        console.log(gameId)
        if(isLogin){
            navigate('/LogIn')
        }else{
            createCartForUser(gameId);
        }
    }

    const [filterPrice, setFilterPrice] = useState(0);
    let maxPrice = 0;
    products.forEach(product => {
        if(maxPrice < product.price){ maxPrice = product.price}
    });
    let filterProducts = products.filter(product => (product.price >= filterPrice)); 

   return (
    <>
        <Filters setFilter={setFilterPrice} maxValue={maxPrice}/>
        <main className="products"> 
            <ul>
                {filterProducts.map(product =>{  
                    return (
                        <li key={product.gameId}>
                            <img
                                src={product.url}
                                alt={product.gameName}
                            ></img>
                            <div>
                                <strong>{product.gameName}</strong> - {formatNumberToCurrency(product.price)}
                            </div>
                            <div> 
                                <button onClick={() => addToCart(product.gameId)}>
                                    <AddToCartIcon/>
                                </button> 
                            </div>
                        </li>
                )})}
            </ul> 
        </main>
    </>
   ); 

}