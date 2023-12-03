import React, { useState } from "react"; 
import { useToken } from "../Token";
import { useUser } from "../User";
import axios from "axios"

const CartContext = React.createContext();
const URL_GET = "http://localhost:4200/cart";

function CartProvider({ children }) { 
    
    const [ carts, setCarts ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useToken();
    const { user } = useUser();
    
    const getCartForUser = () => {
        setLoading(true);
        const headers = { 
            'Authorization': `Bearer ${token}`
        }
        axios.get(`${URL_GET}/${user.userId}`, { headers })
          .then(function (response) { 
            setCarts(response.data); 
            console.log(response.data);
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          }); 
    };

    const createCartForUser = () => {};

    const deleteCartForUser = () => {};

    const auth = { getCartForUser, createCartForUser, deleteCartForUser, carts, setCarts, loading }

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