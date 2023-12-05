import React  from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useToken } from "../Token";
import { useUser } from "../User";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    
    const navigate = useNavigate();
    const {user, saveUser} = useUser(); 
    const { saveToken } = useToken(); 
    
    const login = ( data  ) => { 
        
        try {
            saveToken(data.token);
            saveUser(data.user);
            navigate('/profile');
        } catch (error) {
            console.error('Error during login:', error);
            // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
        }

    }

    const logout = () => {

        saveToken('')
        saveUser('')
        navigate('/')

    }

    const isLogIn = () => { return user !== ''; }

    const auth = { login, logout, isLogIn  }

    return( <AuthContext.Provider value={auth}> {children} </AuthContext.Provider> )

}

function useAuth() {

    const auth = React.useContext(AuthContext);

    return auth;
    
}

function AuthRoute(props) {

    const { isLogIn } = useAuth();

    if (!isLogIn) {
        return <Navigate to={"/login"}/>
    }


    return props.children;
    
}

export {

    AuthProvider, 
    useAuth,
    AuthRoute

};