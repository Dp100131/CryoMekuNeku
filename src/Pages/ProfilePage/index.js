import React from "react";
import "./index.css";
import { useAuth } from "../../Provider/Auth";

export function ProfilePage(){

    const { user, logout } = useAuth();

    const onClick = () => {
      logout();
    }

    return (
        <div className="w-5/6">
          <div className="px-4 sm:px-0">
            <h3 className=" text-base font-family-profile font-semibold leading-7 text-white text-white-900">Información</h3>
            <p className="mt-1 max-w-2xl font-family-profile text-sm leading-6 text-white text-white-500">Información personal y detalles</p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900">Nombre completo</dt>
                <dd className="mt-1 text-sm font-family-profile leading-6 text-white sm:col-span-2 sm:mt-0">{user.name} {user.lastname}</dd>
              </div>              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900">Email</dt>
                <dd className="mt-1 font-family-profile text-sm leading-6 text-white sm:col-span-2 sm:mt-0">{user.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900">Dinero en cuenta</dt>
                <dd className="mt-1 font-family-profile text-sm leading-6 text-white sm:col-span-2 sm:mt-0">$120,000</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-family-profile font-medium leading-6 text-white text-white-900">Descripción</dt>
                <dd className="mt-1 font-family-profile text-sm leading-6 text-white sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                  qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                  pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
                <button onClick={onClick} type="button" class="font-family-profile focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Log out</button>
              </div>     
                                  
                            
            </dl>
          </div>
        </div>         
      );

}