import React from "react";
import { useLocalStorage } from "../LocalStorage";

const UsersContext = React.createContext();

function UserProvider(props) {

    const children = props.children;

    const {
        item: user, 
        saveItem: saveUser, 
        loading,
        error
      } = useLocalStorage('USERS_V2', ''); 

    return (
        <UsersContext.Provider value={{
            user, 
            saveUser, 
            loading,
            error 
        }}>
            {children}
        </UsersContext.Provider>
    );
    
}

function useUser() {

    const users = React.useContext(UsersContext);

    return users;
    
}
export {

    UserProvider,
    useUser

};