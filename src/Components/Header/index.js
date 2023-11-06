import React from "react";
import "./index.css";

export function Header(){

    return(
        <header className="flex flex-row justify-around items-center text-center pt-5 pb-5 bg-sky-950 text-white fixed top-0 w-full z-10 text-serift">
            <div className="logo">
                <h1 className="text-xl font-bold ">CryoMekuNeku</h1>
            </div>
            <div className="nav">
                <ul className="flex gap-5">
                    <li>Tienda</li>
                    <li>Comunidad</li>
                    <li>Acerca De</li>
                    <li>Soporte</li>
                </ul>
            </div>
            <div className="login">
                <h3>Iniciar sesión</h3>
            </div>
        </header>
    );

}