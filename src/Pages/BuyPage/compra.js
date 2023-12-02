
import React from "react";
import "./index.css";
import mk from "../../imgs/mk.jpg";

export function BuyPage(){
    return(
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 class="text-2xl text-white font-bold">Shopping Cart</h1>
    </div>
    <div class="mt-8">
        <div class="bg-white p-8">
        <div class="flex flex-col md:flex-row border-b border-solid border-gray-400 py-4">
            <div class="flex-shrink-0">
                <img alt="imagen" src={mk} class="w-32 h-32 object-cover"></img>
            </div>
            <div class="mt-4 md:mt-0 md:ml-6">
                <h2 class="text-lg font-bold">Nombre producto</h2>
                <p class="mt-2 text-gray-600"> Descripción/fecha lanzamiento/etc</p>
                <button class="px-4 py-2 text-sm text-white bg-red-600 mt-2 hover:bg-red-800">Remover</button>
                <span class="ml-4 font-bold">Precio</span>
            </div>
        </div>
        </div>
    </div>
    <div class="flex justify-start items-center mt-8">
        <span class="text-white mr-4"> Total:</span>
        <span class="text-xl text-white font-bold"> $$Precio</span>
        <button class="bg-indigo-500 ml-auto hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
    </div>
  </div>
    );

}