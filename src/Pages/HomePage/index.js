import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import zelda from "../../imgs/TloZ.jpg";
import amogus from "../../imgs/amongus.jpg";
import botw from "../../imgs/botw.jpg";
import spider from "../../imgs/spiderman.avif";
import cuphead from "../../imgs/cuphead.avif"; 
import { Carousel } from "@material-tailwind/react"; 
import { Products } from "../../Components/Products";
import { useVideoGames } from "../../Provider/videoGames";
import { Spinner } from "@material-tailwind/react";

export function HomePage(){ 
    
    const { videoGames, getVideoGames, loadingVideoGame} = useVideoGames();

    useEffect(() => {
      getVideoGames();
    }, [])

    return(
      <>
        {loadingVideoGame ? (
          <Spinner />
        ) : (
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
            <div className="p-4"> <Products products={videoGames} /> </div>
          </div>
        )}
      </>
    );

}