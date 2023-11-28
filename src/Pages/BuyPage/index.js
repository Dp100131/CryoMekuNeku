
import { ShoppingCart } from "../../Shopping/ShoppingCart";
import { ShoppingCartProvider } from "../../Shopping/ShoppingCartContext";
import { ItemList } from "../../Shopping/ItemList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function BuyPage(){
    return(
    <ShoppingCartProvider>
          <ItemList />
          <ShoppingCart />
    </ShoppingCartProvider>
    );

};