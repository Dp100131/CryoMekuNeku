import React from "react";
import "./index.css";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export function Footer(){

    return(
        
<footer className="bg-primary rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">CryoMekuNeku</span>
            </a>
            <ul className="flex flex-wrap mb-6 text-sm items-center text-center font-medium gap-6 text-white  sm:mb-0 dark:text-white-400">
                <li>
                    <BsFacebook></BsFacebook>
                </li>
                <li>
                    <BsInstagram></BsInstagram>
                </li>
                <li>
                    <BsTwitter></BsTwitter>
                </li>
                <li>
                    <BsGithub></BsGithub>
                </li>
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white  sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Nosotros</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Politicas de privacidad</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licencia</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white  sm:text-center dark:text-white ">© 2023 <a href="https://flowbite.com/" className="hover:underline">CryoMekuNeku</a>. All Rights Reserved.</span>
    </div>
</footer>


    );

}