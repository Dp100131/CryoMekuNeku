import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import {useParams} from "react-router-dom";
import { Spinner} from "@material-tailwind/react";
import axios from "axios";
import {  Dialog  } from "@material-tailwind/react";
/**
 * 
 * const { token, newPassword } = req.body;
 */
const URL_CHANGE_PASSWORD = "http://localhost:4200/auth/change-password"

export function RecoveryPassword() {

    const { slug } = useParams();

    const [newPassword, serNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [loadingRecovery, setLoadingRecovery] = useState(false);
    const  [boolPassRecovery, setBoolpassRecovery] = useState(false)
    const [boolPassTypeRecovery, setBoolpassTypeRecovery] = useState("");

    const changePassword = () => {

        setLoadingRecovery(true);

        if(newPassword === confirmPass){ 
            axios.post(URL_CHANGE_PASSWORD, {
                token: slug,
                newPassword: newPassword
              })
              .then(function (response) {  
                setLoadingRecovery(false);
                setBoolpassTypeRecovery("OK");
                setBoolpassRecovery(true);
        
              })
              .catch(function (error) {
                setLoadingRecovery(false);
                setBoolpassTypeRecovery("SERVER");
                setBoolpassRecovery(true);
              });

        }else{
            setLoadingRecovery(false);
            setBoolpassTypeRecovery("NOOK");
            setBoolpassRecovery(true);
        } 
    }

    

    return (
        <>
            {(loadingRecovery) ? (
                <Spinner/>
            ) : (
                <div className="flex flex-col w-3/4 bg-white gap-y-10 p-10 rounded-md">
                    <h1 className="font-bold text-3xl text-blue-600 text-center">Recuperar contraseña</h1>
                    <div className="flex flex-col items-start justify-start w-3/4 gap-y-5">
                        <h1 className="font-bold text-sm text-blue-600">Nueva contraseña</h1>
                        <Input type="password" onChange={(event) => serNewPassword(event.target.value)} label="Nueva contraseña"></Input>
                    </div>
                    <div className="flex flex-col items-start justify-start w-3/4 gap-y-5">
                        <h1 className="font-bold text-sm text-blue-600">Confirma contraseña</h1>
                        <Input type="password" onChange={(event) => setConfirmPass(event.target.value)} label="Confirma contraseña"></Input>
                    </div>
                    <div>
                        <button onClick={changePassword} className="bg-blue-600 text-white w-full h-[40px] rounded-lg hover:bg-blue-400 hover:text-blue-900 font-bold">Recuperar</button>
                    </div>
                    <Dialog open={boolPassRecovery} handler={setBoolpassRecovery}>
                    {(boolPassTypeRecovery === "OK") ? (<h1 className="text-center font-bold text-xl text-black">✅</h1>) : ((boolPassTypeRecovery === "NOOK") ? (<h1 className="text-center font-bold text-xl text-black">❌ Las contraseñas no coinciden.</h1>) : (<h1 className="text-center font-bold text-xl text-black">❌ Inténtelo más tarde</h1>))}
                    </Dialog>
                </div>
            )}       
        </>
    )
    
}