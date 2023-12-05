import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/Auth";
import axios from "axios";
import {  Dialog  } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

const URL_LOG_IN = "http://localhost:4200/auth/login"
const URL_RECOVERY = "http://localhost:4200/auth/recovery"

export function LogInPage(){
    const { login } = useAuth();

    const [emailValue, setEmailValue] = React.useState("");

    const [passwordValue, setPasswordValue] = React.useState("");

    const [loadingLogIn, setLoadingLogIn] = useState(false);

    const  [boolPass, setBoolpass] = useState(false)
    const [boolPassType, setBoolpassType] = useState("");

    //onChanges
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    const onSubmit = () => {
        axios.post(URL_LOG_IN, {
            email: emailValue,
            password: passwordValue
          })
          .then(function (response) { 
            login(response.data);
          })
          .catch(function (error) {
            setBoolpassType("Unauthorized")
            setBoolpass(error.response.statusText === "Unauthorized")
            console.log(error.response.statusText === "Unauthorized")
            console.log(error);
          }); 
    }
    const recoveryPass = () => {
        if(emailValue === ""){
            setBoolpassType("Null email")
            setBoolpass(true)
        }else{
            setLoadingLogIn(true);
            axios.post(URL_RECOVERY, {
                email: emailValue 
              })
              .then(function (response) { 
                setLoadingLogIn(false);
                setBoolpassType("mail send")
                setBoolpass(true)
              })
              .catch(function (error) {
                let stringBool = "UNF"
                setLoadingLogIn(false);
                setBoolpassType(stringBool) 
                setBoolpass(true)
              });
        }
    }

    return (
        <> 
            {(loadingLogIn) ? (
                <Spinner />
            ) : (
                <div className="w-full">
                    <Dialog open={boolPass} handler={setBoolpass} className="w-1/5 p-10">
                        {(boolPassType === "Unauthorized") ? (<h1 className="text-center font-bold text-xl text-red-500">Contraseña incorrecta</h1>) : ((boolPassType === "mail send") ? (<h1 className="text-center font-bold text-xl text-black">Correo enviado ✅</h1>) : (<h1 className="text-center font-bold text-xl text-black">❌ User not found</h1>))}
                        
                    </Dialog>
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        
                        <h2 className="mt-10 font-family-LogIn text-center text-2xl font-bold leading-9 tracking-tight text-white dark:text-white">
                            Ingrese a su cuenta
                        </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className="space-y-6">
                            <div>
                            <label htmlFor="email" className="block font-family-LogIn text-sm font-medium leading-6 text-white">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                value={emailValue}
                                onChange={handleEmailChange}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>

                            <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-family-LogIn text-sm font-medium leading-6 text-white">
                                Contraseña
                                </label>
                                <div className="text-sm">
                                    <Link className="font-semibold font-family-LogIn text-white hover:text-indigo-500" onClick={recoveryPass}>¿Olvidó su contraseña?</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                value={passwordValue}
                                onChange={handlePasswordChange}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            </div>

                            <div>
                            <button
                                onClick={onSubmit}
                                type="submit"
                                className="flex font-family-LogIn w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Ingresar
                            </button>
                            </div>
                        </div>

                        <p className="mt-10 text-center text-sm text-gray-500">                
                            <Link
                                className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                                to={"/CreateAnAccount"}
                            >Registrarse</Link>
                        </p>
                        </div>
                    </div>
                </div>
            )}  
        </>
    )
}