
import { ShoppingCart } from "../../Shopping/ShoppingCart";
import { ShoppingCartProvider } from "../../Shopping/ShoppingCartContext";
import { ItemList } from "../../Shopping/ItemList"; 

export function BuyPage(){
    return(
    <ShoppingCartProvider>
          <ItemList />
          <ShoppingCart />
    </ShoppingCartProvider>
    );

};