import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "../Token";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const [token, saveToken] = useToken();

    console.log(token);
    
    const login = ( data  ) => { 
        
        saveToken(data.token)
        setUser(data.user)
        navigate('/profile')

    }

    const logout = () => {

        setUser(null)
        navigate('/')

    }

    const isLogIn = () => { return user !== null; }

    const auth = { user, login, logout, setUser, isLogIn }

    return( <AuthContext.Provider value={auth}> {children} </AuthContext.Provider> )

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