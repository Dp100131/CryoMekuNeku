import {useEffect, useState} from "react";

function useLocalStorage(itemName, initialValue) { 

    const [error, setError] = useState(false);
  
    const [loading, setLoading] = useState(true);
  
    const [item, setItem] = useState(initialValue);

    useEffect(() => {

        try {

            const localStorageItem = localStorage.getItem(itemName);
    
            let parseItem;
    
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parseItem = initialValue;
            }else{
                parseItem = JSON.parse(localStorageItem);
            }
    
            setItem(parseItem)
            setLoading(false)
    
        }catch(e){
            
            setError(e);
        
        }

    }, []) 

    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem)) 
            setItem(newItem)
          }catch(error){ 
            setError(error) 
          }
    }

    return {
        item,
        saveItem,
        loading,
        error
      }
    
}

export {useLocalStorage};