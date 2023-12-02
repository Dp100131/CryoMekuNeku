import React from "react";
import { useLocalStorage } from "../LocalStorage";

const TokenContext = React.createContext();

function TokenProvider(props) {

    const children = props.children;

    const {
        item: token, 
        saveItem: saveToken, 
        loading,
        error
      } = useLocalStorage('TOKEN_V1', ''); 

    return (
        <TokenContext.Provider value={{
            token, 
            saveToken, 
            loading,
            error 
        }}>
            {children}
        </TokenContext.Provider>
    );
    
}

function useToken() {

    const token = React.useContext(TokenContext);

    return token;
    
}
export { TokenProvider,  useToken };