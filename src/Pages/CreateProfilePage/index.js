import React, {useState} from "react";
import "./index.css";
import { useUsers } from "../../Provider/Users";
import { useAuth } from "../../Provider/Auth";
import { useNavigate } from "react-router";

export function CreateProfilePage(){

    const navigate = useNavigate();

    const users = useUsers();

    const {  setUser } = useAuth();

    // Inputs States 
    const [emailValue, setEmailValue] = useState('');

    const [passwordValue, setPasswordValue] = useState('');

    const [nameValue, setNameValue] = useState('');
    
    const [lastNameValue, setLastNameValue] = useState('');

    //onChanges
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
    };
    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastNameValue(event.target.value);
    };

    const onSubmit = () => {
        if((emailValue) && (passwordValue) && (nameValue) && (lastNameValue)){
            users.addUser({
                email: emailValue, 
                password: passwordValue, 
                name: nameValue, 
                lastName: lastNameValue
            })
            setUser({
                email: emailValue, 
                password: passwordValue, 
                name: nameValue, 
                lastName: lastNameValue
            });
            navigate("/profile");
        }
    }

    return (
        <>
            <div className="w-5/6 h-5/6 font-family-CPP">
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    value={emailValue}
                    onChange={handleEmailChange}
                    type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input 
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input 
                        value={nameValue}
                        onChange={handleNameChange}
                        type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input 
                        value={lastNameValue}
                        onChange={handleLastNameChange}
                        type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <button onClick={onSubmit} 
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
        </>
    )
}