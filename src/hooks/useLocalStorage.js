import {useState} from 'react'

export const useLocalStorage = (key,initialValue) =>{

        const[storedValue,setStoredValue] = useState(()=>{
        //get the item from localstorage by checking through the key using window.localStorage.getItem(key) 
        const item = window.localStorage.getItem(key);
        //if the item already exist, return the value or else retun the initial value
        return item ? JSON.parse(item):initialValue;

        });

    //lets return storedValue from this hook in an array(returning as array(only order matters) better than returning as an {} )
    //return as an object will limit the usage of the hook since we have to stick to same key name everytime
    //  -----return[storedValue]---error 
   

    // We dealt with the value part of the hook above( not the setter)
    //Create setter function and remember to return in the array

     const setValue = (value) => {
    //set the 'value" to localStorge using the key(that is passed above:setStoredvalue)
    setStoredValue(value)
    //Update the state of storedValue with value
    window.localStorage.setItem(key, JSON.stringify)
    
    }
    return[storedValue,setValue]

}  

