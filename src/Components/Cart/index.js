import { useEffect, useId, useState } from 'react';
import { CartIcon, ClearCartIcon } from '../Icons';
import { useCart } from '../../Provider/Cart'
import './index.css'; 
import { formatNumberToCurrency } from '../../util';
import { useToken } from '../../Provider/Token';
import axios from "axios"
import { useUser } from '../../Provider/User';
import { Spinner } from "@material-tailwind/react";

 

function CartItems ({ products }) { 

  return (
    <>
        {products.map(item => {
            let videoGame = item.videoGames[0]
            return(
                <li>
                    <img
                        src={videoGame.url}
                        alt={videoGame.gameName}
                    />
                    <div>
                        <strong>{videoGame.gameName}</strong> - {formatNumberToCurrency(videoGame.price)}
                    </div> 
                </li>
            )
        })}
    </>
  )
}

export function Cart () {
  const cartCheckboxId = useId() 
  const {carts, getCartForUser,  loading} = useCart(); 
    useEffect(() => {
        getCartForUser();
    }, []);
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' className='hidden' />

      <aside className='cart'>
        {loading ? (
          <Spinner />
        ) : (
          <ul>
            <CartItems products={carts} />
          </ul>
        )}  
      </aside>
    </>
  )
}