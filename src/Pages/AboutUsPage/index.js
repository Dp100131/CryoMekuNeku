import React from "react";
import "./index.css";
import foto from "../../imgs/foto.PNG"

export function AboutUsPage(){

    return(
        <section class="antialiased w-full  max-w-screen-xl mx-auto rounded-lg">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div class="max-w-2xl mx-auto text-center">
                <h2 class=" text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl p-4">
                    CryoMekuNeku
                </h2>
                    <div className='flex-center w-full'>
                    <div className='px-1 w-full flex justify-center p-2'>
                        <img
                        src={foto}
                        alt='Pic'
                        class='h-200px w-200px rounded-full border-2 shadow-md'
                        />
                    </div>
                    </div>
                    <p class="mt-4 text-base font-normal text-white sm:text-xl drop-shadow-md">Comenzamos como un pequeño equipo de entusiastas de los videojuegos con la visión de crear un espacio donde los jugadores pudieran encontrar todo lo que buscan. A lo largo de los años, hemos crecido y evolucionado, pero nuestra dedicación a la calidad y la diversión nunca ha cambiado.</p>
                </div>
            </div>
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center rounded p-2 ">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="font-light text-2xl sm:text-4xl sm:leading-tight">Respaldados por empresas de gran nivel
            </h2>
        </div>

        <div class="grid  p-4 items-center max-w-4xl grid-cols-2 gap-4 mx-auto mt-12 md:mt-20 md:grid-cols-4  ">
            <a href="https://store.steampowered.com" >
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-6 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.nintendo.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/2560px-Nintendo_red_logo.svg.png" alt=""/>
            </div>
            </a> 
            <a  href="https://www.microsoft.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.playstation.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full mx-auto h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PlayStation_logo_and_wordmark.svg/2560px-PlayStation_logo_and_wordmark.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://itch.io/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Itch.io_logo.svg/2560px-Itch.io_logo.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.sega.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SEGA_logo.svg/2560px-SEGA_logo.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.capcomusa.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Capcom_logo.svg/2560px-Capcom_logo.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://unity.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.xbox.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Xbox_2019_horizontal.svg" alt=""/>
            </div>
            </a>

            <a href="https://www.devolverdigital.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full mx-auto h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Devolver_Digital_logo.svg/1200px-Devolver_Digital_logo.svg.png" alt=""/>
            </div>
            </a>

            <a href="https://www.riotgames.com/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://upload.wikimedia.org/wikipedia/de/thumb/d/d2/Riot_Games_logo.svg/1200px-Riot_Games_logo.svg.png" alt=""/>
            </div>
            </a>
            
            <a href="https://godotengine.org/">
            <div class="bg-white h-12 flex shadow-lg items-center justify-center">
                <img class="hover:opacity-50 object-contain w-full h-8 mx-auto" src="https://godotengine.org/assets/press/logo_small_color_light.png" alt=""/>
            </div>
            </a>
        </div>

        <div class="flex items-center justify-center mt-10 space-x-3 md:hidden">
            <div class="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
        </div>

        <p class="mt-10 text-base text-center text-black md:mt-20 p-6 py-3 border w-72 border-black rounded-full mx-auto">
            </p>
    </div>
        </section>
    );

}