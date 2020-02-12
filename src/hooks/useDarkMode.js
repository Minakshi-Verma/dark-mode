import {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'


 export const useDarkMode = () => {

const [darkMode, setDarkMode] = useLocalStorage(darkmode, enabled)

}


// const darkMode =localStorage.getItem('darkMode')
// const enableDarkMode =() =>{
//     //add class darkmode to the body
//     document.body.classList.add('darkmode')
//     //update dark in the localstorage

//     localStorage.setItem('darkMode', 'enabled')
// }


// const disableDarkMode = () =>{
//     //add class darkmode to the body
//     document.body.classList.remove('darkmode')
//     //update dark in the localstorage

//     localStorage.setItem('darkMode', 'null')
// }



