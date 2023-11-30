import React from "react";
import "./index.css";

export function CommunityPage(){

    return(
        <div class="max-w-screen-xl mx-auto rounded-lg pt-4">
            <div class=" h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-red-500 lg:text-3xl ">Comunidad</h2>

                <p class="hidden max-w-screen-sm  text-white md:block">
                ¡Bienvenidos a nuestro rincón comunitario! Este espacio está dedicado a todos ustedes, la vibrante comunidad que hace que este lugar sea único. ¡Únete, comparte y haz de este espacio un reflejo de la increíble comunidad que somos!
                </p>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://i.pinimg.com/originals/a8/16/15/a81615911786bc17df3e0775514c3526.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Fanart</span>
            </a>
  
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/05/zelda-tears-of-the-kingdom-link-tingle-outfit-characters-scared.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Gameplays</span>
            </a>



            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://i.pinimg.com/originals/bd/be/2f/bdbe2f7942302078932ab1744a5a3c72.gif" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Variedad</span>
            </a>



            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://media.karousell.com/media/photos/products/2023/8/20/nintendo_bundle_package_ninten_1692537726_67ed8d09_progressive.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Compra y venta</span>
            </a>

        </div>
    </div>
</div>

        </div>
    );

}