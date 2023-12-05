import { useEffect, useId, useState } from 'react';
import { CartIcon, RemoveFromCartIcon } from '../Icons';
import { useCart } from '../../Provider/Cart'
import './index.css'; 
import { formatNumberToCurrency } from '../../util';
import { useToken } from '../../Provider/Token';
import axios from "axios"
import { useUser } from '../../Provider/User';
import { Spinner } from "@material-tailwind/react";

 

function CartItems ({ products }) { 

  const { deleteCartForUser } = useCart(); 

  return (
    <>
        {products.length > 0 ? (
  products.map((item) => { 

    return (
      <li key={item.id} className="flex flex-col gap-1">
        <img src={item.url} alt={item.game_name} />
        <div>
          <strong>{item.game_name}</strong> -{" "}
          {formatNumberToCurrency(item.price)}
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={() => deleteCartForUser(item.id)}
            className="bg-red-500 rounded-2xl p-1"
          >
            <RemoveFromCartIcon />  
          </button>
          <button className="bg-green-500 p-1 font-bold rounded-md">
            <h1>Comprar</h1>
          </button>
        </div>
      </li>
    );
  })
) : (
  <h1>No hay juegos</h1>
)}
    </>
  )
}

export function Cart () {
  const cartCheckboxId = useId() 
  const {carts, getCartForUser,  loadingCart} = useCart(); 
    useEffect(() => {
        getCartForUser();
        console.log(carts);
    }, []);
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' className='hidden' />

      <aside className='cart overflow-y-auto'>
        {loadingCart ? (
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