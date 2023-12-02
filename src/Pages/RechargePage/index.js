import React from "react";
import "./index.css";
import { useUser } from "../../Provider/User"; 
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useToken } from "../../Provider/Token";

const URL_USER = "http://localhost:4200/user"

export function RechargePage(){

    // TODO: que funcione el balance

    const [balance, setBalance] = React.useState(null);

    const handleBalanceChange = (event) => {
        setBalance(event.target.value);
    }
     
    const { user, saveUser } = useUser();
    const { token } = useToken(); 

    const onRecharge = () => {
        console.log(user)
        console.log(token)
        const options = {
            headers: { Authorization: `Bearer ${token}` },
            data:{
                balance: balance
            }
        }
        axios.patch(`${URL_USER}/${user.userId}`, options)
          .then(function (response) { 
            console.log(response); 
          })
          .catch(function (error) {
            console.log(error);
          }); 
    }

    return (
        <>
            <div className="flex flex-col  justify-center align-middle w-[50%] mr-auto ml-auto bg-slate-300 py-10 px-10 rounded-md">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                
                    <h2 className="mt-10 font-family-LogIn text-center text-2xl font-bold leading-9 tracking-tight text-slate-700 dark:text-white">Recarga</h2>
                </div> 
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div> 
                            <div className="mt-2">
                                <Input type="number" onChange={handleBalanceChange} variant="outlined" label="Balance"/>
                            </div>
                        </div> 
                    <div>
                        <Button color="green" onClick={onRecharge} >Ingresar</Button>
                    </div>
                </div> 
                </div>
            </div>
        </>          
    );

}