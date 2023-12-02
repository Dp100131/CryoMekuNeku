import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/Auth";
import { Avatar } from "@fluentui/react-components";
import ShoppingCartIcon from "../../imgs/cart-shopping-solid.svg";

export function Header(){

    const [isVisible, setIsVisible] = useState(false);

    const { isLogIn } = useAuth(); 

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

    return(
        <> 
            <header className="fixed top-0 w-full z-10 flex flex-row justify-around items-center text-center pt-5 pb-5 bg-primary text-white">
                <nav className="bg-primary w-full border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl w-full flex flex-row items-center justify-around mx-auto p-4">
                        <button onClick={toggleVisibility} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <Link
                            to={'/'}
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <div className="logo">
                                <h1 className="self-center text-2xl font-semibold whitespace-nowrap">CryoMekuNeku</h1>
                            </div>
                        </Link>  
                        <div className={`${isVisible ? 'absolute top-[80px]' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                            <ul className={` font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                                <li>
                                    <Link className="block py-2 px-3 text-white rounded hover:text-indigo-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={"/"}
                                    >Tienda</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 text-white rounded hover:text-indigo-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={"/Community"}
                                    >Comunidad</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 text-white rounded hover:text-indigo-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={"/AboutUs"}
                                    >Acerca De</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 text-white rounded hover:text-indigo-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to={"/Support"}
                                    >Soporte</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="shopping items-center">
                                {isLogIn() ? (
                                    <div><Link
                                    to={"/buy"}
                                ><img src={ShoppingCartIcon} alt="Carrito de compras" className="icono-carrito"/></Link></div>
                                    ) : null}
                            </div>
                            <div className="login items-center">
                                {isLogIn() ? <div><Link
                                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                                    to={"/profile"}
                                ><Avatar shape="circular" /></Link></div> : <h3><Link
                                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                                    to={"/LogIn"}
                                >LogIn</Link></h3>}
                            </div>
                        </div>
                    </div> 
                </nav>    
            </header>
            
        </>
        
    );

}