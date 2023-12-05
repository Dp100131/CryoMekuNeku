import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import { useToken } from "../../Provider/Token";
import {  Dialog  } from "@material-tailwind/react";
import {  Spinner  } from "@material-tailwind/react";

export function AddVideoGame() {

  const [loadingAddVG, setLoadingAddVG] = useState(false);
  const [boolPassVG, setBoolpassVG] = useState(false)
  const [boolPassTypeVG, setBoolpassTypeVG] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    file: null,
  });

  const { token } = useToken();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    setLoadingAddVG(true);
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price);  
    formDataToSend.append("file", formData.file);

    axios
      .post("http://localhost:4200/videoGame/upload", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoadingAddVG(false)
        setBoolpassTypeVG("Check")
        setBoolpassVG(true)
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        setLoadingAddVG(false)
        setBoolpassTypeVG("NC")
        setBoolpassVG(true)
        console.error("Error al enviar los datos:", error);
      });
  };

  return (
    <>
      {(loadingAddVG) ? (
                <Spinner />
            ) : (
                <div className="w-full">
                    <Dialog open={boolPassVG} handler={setBoolpassVG} className="w-1/5 p-10">
                        {(boolPassTypeVG === "Check") ? (<h1 className="text-center font-bold text-xl text-black">Añadido correctamente ✅</h1>) : (<h1 className="text-center font-bold text-xl text-black">Inténtelo más tarde ❌</h1>)}
                        
                    </Dialog>
                    <div className="w-3/4 mr-auto ml-auto flex flex-col bg-white p-10 rounded-md text-center justify-center gap-5 gap-y-5">
        <h1 className="text-blue-600 font-bold text-xl">
          Añade un video juego
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="w-full flex flex-row justify-around">
            <div className="w-2/5 flex flex-col gap-5">
              <Input
                required
                className="text-blue-600"
                label="Nombre"
                name="name"
                onChange={handleInputChange}
              />
              <Input
                className="text-blue-600"
                label="Descripción"
                name="description"
                onChange={handleInputChange}
              />
              <Input
                required
                className="text-blue-600"
                label="Precio"
                name="price"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-2/5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                name="file"
                onChange={handleInputChange}
              />
              <p
                className="mt-1 text-sm text-gray-400 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <div className="mt-[10px]">
            <button
              type="submit"
              className="bg-blue-600 text-white w-full h-[40px] rounded-lg hover:bg-blue-400 hover:text-blue-900 font-bold"
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
                </div>
            )} 
    </>
  );
}