import { useState } from "react";

export default function LightDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`
            flex relative border-2 border-gray-500 w-fit rounded-full p-1 transition-all ml-[80%]
            ${isDarkMode ? 'bg-gray-300' : 'bg-gray-700'}
            `}>
            <span className={`
                absolute size-6 rounded-full transition-all
                ${isDarkMode ? 'translate-x-8 bg-black' : 'translate-x-1 bg-white'}
                `}></span>
            <img className="fill-red-500 stroke-red-500 text-red-500 mx-1" src="/src/assets/lightmode.svg" alt="" />
            <img src="/src/assets/darkmode.svg" alt="" />
        </button>
    )
}