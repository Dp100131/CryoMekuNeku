import React, { useContext, useState } from "react";
import "./index.css";
import zelda from "../../imgs/TloZ.jpg";
import amogus from "../../imgs/amongus.jpg";
import botw from "../../imgs/botw.jpg";
import spider from "../../imgs/spiderman.avif";
import cuphead from "../../imgs/cuphead.avif";
import resident from "../../imgs/resident.jpg";
import baldurs from "../../imgs/baldurs.jpg";
import mk from "../../imgs/mk.jpg";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  Button,
} from "@material-tailwind/react";

export function HomePage(){
  
    const [categoria, setCategoria] = useState("Todas"); 
    const imagenes = [
        { src: resident, precio:"COL$ 229.900", categoria: "Acción", alt: "resident evil"},
        { src: amogus, precio:"COL$ 10.800", categoria: "Indie", alt: "Amongus" },
        { src: botw, precio:"COL$ 269.900", categoria: "Aventura", alt: "Botw" },
        { src: mk, precio:"COL$ 199.900",categoria: "Acción", alt: "Mortal Kombat 11" },
        { src: zelda,precio:"COL$ 300.000", categoria: "Aventura", alt: "Botw" },
        { src: cuphead, precio:"COL$ 39.900",categoria: "Indie", alt: "cuphead" },
        { src: spider, precio:"COL$ 309.900",categoria: "Acción", alt: "Spiderman 2" },
        { src: baldurs, precio:"COL$ 199.900",categoria: "Rol", alt: "Baldurs gate 3" }
      ];


    return(
    <div>
        

<div className="flex items-center justify-center">
  <div className="carousel-container rounded-xl h-1/4 overflow-hidden flex items-center justify-center w-5/6"> 
    <Carousel transition={{ duration: 1 }} className="rounded-xl h-1/2 overflow-hidden">
    <img src={zelda} alt="totk"className="h-full w-full overflow-hidden object-cover"/>
    <img src={amogus} alt="amongus"className="h-full w-full  overflow-hidden object-cover"/>
    <img src={botw} alt="botw"className="h-full w-full overflow-hidden object-cover"/>
    <img src={spider} alt="spiderman2"className="h-full w-full overflow-hidden object-cover"/>
    <img src={cuphead} alt="cuphead"className="h-full w-full overflow-hidden object-cover"/>
    </Carousel>
    
  </div>

</div>
  <div class="p-4">
  <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button type="button" onClick={() => setCategoria("Todas")} class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">Todas las categorías</button>
      <button type="button" onClick={() => setCategoria("Acción")} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Acción</button>
      <button type="button" onClick={() => setCategoria("Aventura")} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Aventura</button>
      <button type="button" onClick={() => setCategoria("Rol")} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Rol</button>
      <button type="button" onClick={() => setCategoria("Indie")} class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Indie</button>
  </div>
  <div class="flex flex-wrap">
  {imagenes
          .filter((imagen) => categoria === "Todas" || imagen.categoria === categoria)
          .map((imagen, index) => (
              <div className="relative group m-2 inline-block" key={index}>
        <img className="h-64 w-auto hover:opacity-50" src={imagen.src} alt={imagen.alt}/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm text-white">
            {imagen.precio}
          </p>
        <Link to="/buy">
        <Button color="red" className="px-4 py-2 text-sm text-white bg-red-600 mt-2" variant="gradient">
          Comprar
          </Button>
        </Link>
        </div>
      </div>
          ))}
  </div>
  </div>
</div>
    );

}