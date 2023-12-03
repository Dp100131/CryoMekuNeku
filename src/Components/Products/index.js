import React, { useState } from "react";
import { AddToCartIcon } from "../Icons";
import './index.css';
import { formatNumberToCurrency } from "../../util"
import { Filters } from "../Filtro";

export function Products({ products }) {

    const [filterPrice, setFilterPrice] = useState(0);
    let maxPrice = 0;
    products.forEach(product => {
        if(maxPrice < product.price){ maxPrice = product.price}
    });
    const filterProducts = products.filter(product => (product.price >= filterPrice));
    
   return (
    <>
        <Filters setFilter={setFilterPrice} maxValue={maxPrice}/>
        <main className="products"> 
            <ul>
                {filterProducts.map(product => (
                    <li key={product.gameId}>
                        <img
                            src={product.url}
                            alt={product.gameName}
                        ></img>
                        <div>
                            <strong>{product.gameName}</strong> - {formatNumberToCurrency(product.price)}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul> 
        </main>
    </>
   ); 

}