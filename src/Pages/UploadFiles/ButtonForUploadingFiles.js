import React from "react";
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider'

export default function ButtonForUploadingFiles( {file} )
{

    // Guardamos en objetos al formulario y a la input para subir archivos
    const formulario = document.getElementById('FormForUploadingFiles');
    const input = document.getElementById('dropzone-file');

    const fileName = file.name;

    //creamos la función para el botón
    const uploadFileWhenClick = () => {

        // añadimos el evento al botón cuando se presiona
        if( fileName === "no file")
        {
            alert("Ningun archivo ha sido seleccionado");
        }
        else
        {
            alert("Archivo " + fileName + " subido de manera exitosa");
        }

    }

    return(

        <div id="ButtonUploadFilesDiv" className="flex items-center justify-center p-4 border-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
                    id="BotonUploadFiles"
                    onClick={ uploadFileWhenClick }
                    >
                Subir archivo
            </button>
        </div>

    );

}