import React from "react";
import "./index.css";
import { useUser } from "../../Provider/User";
import { useAuth } from "../../Provider/Auth";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { formatNumberToCurrency } from "../../util"



/**
 * email :  "danielandrespintoortega21212@gmail.com"
 * recoveryToken :  null
 * typeId :  1
 * userId :  2
 * userLastName :  "Pinto Ortega                                                                                        "
 * userName :  "Daniel Andrés
 * balance: 0
 */

export function ProfilePage(){

    const { logout } = useAuth();
    const { user } = useUser();
    console.log(user);

    const onClick = () => {
      logout();
    }

    return (
        <div className=" flex  flex-col justify-center align-middle w-auto mr-auto ml-auto bg-tertiary py-10 px-10 rounded-md">
          {(user.typeId === 1) ? (
            <div className="flex flex-row justify-end">
              <button className="bg-green-500 rounded-md text-white font-bold p-2"><Link to={"/AddVG"}>Añadir productos</Link></button>
            </div>
          ) : (<></>)} 
          <div className="px-4 sm:px-0">
            <h3 className=" text-base font-family-profile font-semibold leading-7 text-white text-white-900">Información</h3>
            <p className="mt-1 max-w-2xl font-family-profile text-sm leading-6 text-white text-white-500">Información personal y detalles</p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900 text-start">Nombre completo</dt>
                <dd className="mt-1 text-sm font-family-profile leading-6 text-white sm:col-span-2 sm:mt-0">{user.userName} {user.userLastName}</dd>
              </div>              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900">Email</dt>
                <dd className="mt-1 font-family-profile text-sm leading-6 text-white sm:col-span-2 sm:mt-0">{user.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 md:grid-cols-4">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900 text-start">Saldo</dt>
                <dd className="mt-1 font-family-profile text-sm leading-6 text-white sm:col-span-2 sm:mt-0">{formatNumberToCurrency(user.balance)}</dd>
                <Link to={'/Recharge'}>
                  <Button color="green">Recarga</Button>
                </Link> 
              </div>
              <div className="px-4 py-6 flex justify-center align-middle"> 
                <Button onClick={onClick} color="red">Log out</Button>
              </div>              
            </dl>
          </div>
        </div>         
      );

}