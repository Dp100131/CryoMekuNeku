import React from "react";
import { useLocalStorage } from "../LocalStorage";

const UsersContext = React.createContext();

function UsersProvider(props) {

    const children = props.children;

    const {
        item: users, 
        saveItem: saveUsers, 
        loading,
        error
      } = useLocalStorage('USERS_V1', []);

    const addUser = (user) => {

        const newUsers = [...users]

        newUsers.push({
            email: user.email, 
            password: user.password, 
            name: user.name, 
            lastName: user.lastName
        })
        saveUsers(newUsers);

    }

    return (
        <UsersContext.Provider value={{
            users, 
            saveUsers, 
            loading,
            error,
            addUser
        }}>
            {children}
        </UsersContext.Provider>
    );
    
}

function useUsers() {

    const users = React.useContext(UsersContext);

    return users;
    
}
export {

    UsersProvider,
    useUsers

};