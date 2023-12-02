import React, { useState } from "react";
import "./index.css";
import { AudioSurroundModeNext } from "@fluentui/keyboard-keys";

export function UploadFiles()
{

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No hay ningún archivo seleccionado");

    return(

        <div className="flex items-center justify-center">
            {/* creamos un simple enunciado que le dice al usuario que hacer */}
            <div class="block box-border p-5 border-5">
                <h1 className="text-white object-top">Por favor, selecciones los archivos a cargar</h1>
            </div>

                    
                {/* insertamos un div que contiene una zona de input 
                (que permite seleccionar un archivo del admin. de archivos predeterminado 
                del s.o. y un formulario */}
                <div class="flex items-center justify-center w-full">
                    
                    {/* configuramos la etiqueta para el input file */}
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <form 
                            // onClick= {() => document.querySelector("#dropzone-file").click()}
                        >
                            <input id="dropzone-file" accept = "image/*" type="file" class="hidden" 
                            
                                onChange={

                                    // Cuando se cambie el estado de la input (cuando se recibe una
                                    // imagen), ejecuta la siguiente funcion anonima

                                    ({target: {files}}) => { 

                                        // recibe como parámetro el "objetivo" que se seleccionó
                                        // en el Admin. de archivos 

                                        files[0] && setFileName(files[0].name)
                                        // recibe el archivo y cambie el estado del archivo 
                                        // de "ningun archivo seleccionado" al nombre del archivo 
                                        

                                        if( files )
                                        {

                                            // además, se crea la url para el objeto imagen 
                                            // que se subió
                                            setImage(URL.createObjectURL(files[0]))

                                        }

                                    }

                                }

                            />


                                {/* ahora, cuando haya una imagen en la input-zon */}
                                {image ? 
                                    <img src={image} width={150} height={150} alt={fileName}/>

                                    // entonces, coloque la imagen dentro de la input zone, 
                                    // siendo una especie de indicativo de que el archivo se
                                    // seleccionó correctamente


                                : 
                                // de lo contrario, muestre el texto por defecto cuando no hay 
                                // ninguna imagen seleccionada 
                                
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>}

                        </form>
                    </label>
                </div>
            

        </div>

    );

}

