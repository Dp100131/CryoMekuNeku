import React, { useState } from "react"; 
import { useToken } from "../Token";
import { useUser } from "../User";
import axios from "axios"

const CartContext = React.createContext();
const URL_GET = "http://localhost:4200/cart";

function CartProvider({ children }) { 
    
    const [ carts, setCarts ] = useState([]);
    const [loadingCart, setLoadingCart] = useState(true);
    const { token } = useToken();
    const { user } = useUser();
    
    const getCartForUser = () => {
        setLoadingCart(true);
        const headers = { 
            'Authorization': `Bearer ${token}`
        }
        axios.get(`${URL_GET}/${user.userId}`, { headers })
          .then(function (response) { 
            setCarts(response.data); 
            console.log(response.data);
            setLoadingCart(false);
          })
          .catch(function (error) {
            console.log(error);
          }); 
    };

    const createCartForUser = (gameId) => {
      const headers = { 
        'Authorization': `Bearer ${token}`
    }
    axios.post(`${URL_GET}/${gameId}`, 
      {
        userId: user.userId,
        gameId: gameId
      }
      ,{ headers })
      .then(function (response) { 
        getCartForUser()
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    const deleteCartForUser = () => {};

    const auth = { getCartForUser, createCartForUser, deleteCartForUser, carts, setCarts, loadingCart }

    return( <CartContext.Provider value={auth}> {children} </CartContext.Provider> )

}

function useCart() {

    const auth = React.useContext(CartContext);

    return auth;
    
} 

export {

    CartProvider, 
    useCart 

};