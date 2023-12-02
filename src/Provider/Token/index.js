import React from "react";
import { useLocalStorage } from "../LocalStorage";

const UsersContext = React.createContext();

function TokenProvider(props) {

    const children = props.children;

    const {
        item: token, 
        saveItem: saveToken, 
        loading,
        error
      } = useLocalStorage('TOKEN_V1', '');

    const saveTokenS = (Token) => saveToken(Token);

    return (
        <UsersContext.Provider value={{
            token, 
            saveToken, 
            loading,
            error,
            saveTokenS
        }}>
            {children}
        </UsersContext.Provider>
    );
    
}

function useToken() {

    const token = React.useContext(UsersContext);

    return token;
    
}
export { TokenProvider,  useToken };