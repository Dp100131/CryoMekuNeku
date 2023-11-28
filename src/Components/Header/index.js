import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/Auth";
import { Avatar } from "@fluentui/react-components";
import ShoppingCartIcon from "../../imgs/cart-shopping-solid.svg";

export function Header(){

    const { isLogIn } = useAuth();

    return(
        <header className="fixed top-0 w-full z-10 flex flex-row justify-around items-center text-center pt-5 pb-5 bg-primary text-white">
            <div className="logo">
                <h1 className="text-xl font-bold ">CryoMekuNeku</h1>
            </div>
            <div className="nav">
                <ul className="flex gap-5">
                    <li><Link
                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                    to={"/"}
                >Tienda</Link></li>
                    <li><Link
                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                    to={"/Community"}
                >Comunidad</Link></li>
                    <li><Link
                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                    to={"/AboutUs"}
                >Acerca De</Link></li>
                    <li><Link
                    className="font-semibold font-family-LogIn leading-6 text-white hover:text-indigo-500" 
                    to={"/Support"}
                >Soporte</Link></li>
                </ul>
            </div>
            <div class="flex flex-row items-center">
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
                >Iniciar sesión</Link></h3>}
            </div>
        </div>
        </header>
    );

}