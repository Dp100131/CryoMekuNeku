import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUsers } from "../Users";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const users = useUsers();

    console.log(users);
    
    const login = ( email,  password) => {

        const comprobar = users.users;

        comprobar.forEach(element => {
            console.log(element);
            if ((element.email === email) && (element.password === password)) {
                setUser( { ...element } )
                navigate('/profile')
            }
        });

    }

    const logout = () => {

        setUser(null)
        navigate('/')

    }

    const isLogIn = () => {
        return user !== null;
    }

    const auth = { user, login, logout, setUser, isLogIn }

    return(

        <AuthContext.Provider value={auth}>

            {children}

        </AuthContext.Provider>

    )

}

function useAuth() {

    const auth = React.useContext(AuthContext);

    return auth;
    
}

function AuthRoute(props) {

    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to={"/login"}/>
    }


    return props.children;
    
}

export {

    AuthProvider, 
    useAuth,
    AuthRoute

};