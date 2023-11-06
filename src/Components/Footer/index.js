import React from "react";
import "./index.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footer(){

    return(
        <footer className="flex justify-center content-center p-4 bg-sky-950 text-white">
            <div className=" flex flex-col justify-between w-5/6 h-5/6 "> 
                <hr></hr>
                <div className="bg-slate-900 p-4">
                <div className="flex gap-4">
                    <div><BsFacebook/></div>
                    <div><BsInstagram/></div>
                    <div><BsTwitter/></div>
                </div>
                <br></br>
                <pr>© 2023 Valve Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.
Todos los precios incluyen IVA (donde sea aplicable).   Política de Privacidad   |   Información legal   |   Acuerdo de Suscriptor a Steam   |   Reembolsos   |   Cookies
</pr>
                </div>
                <hr></hr>
            </div>
        </footer>
    );

}