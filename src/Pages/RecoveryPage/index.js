import { Input } from "@material-tailwind/react";
import React from "react";
import {useParams} from "react-router-dom"

export function RecoveryPassword() {

    const { slug } = useParams();

    return (
        <>
            <div className="flex flex-col w-3/4 bg-white gap-y-10 p-10 rounded-md">
                <h1 className="font-bold text-3xl text-blue-600 text-center">Recuperar contraseña {slug}</h1>
                <div className="flex flex-col items-start justify-start w-3/4 gap-y-5">
                    <h1 className="font-bold text-sm text-blue-600">Nueva contraseña</h1>
                    <Input label="Nueva contraseña"></Input>
                </div>
                <div className="flex flex-col items-start justify-start w-3/4 gap-y-5">
                    <h1 className="font-bold text-sm text-blue-600">Confirma contraseña</h1>
                    <Input label="Confirma contraseña"></Input>
                </div>
                <div>
                    <button className="bg-blue-600 text-white w-full h-[40px] rounded-lg hover:bg-blue-400 hover:text-blue-900 font-bold">Recuperar</button>
                </div>
            </div>
        </>
    )
    
}