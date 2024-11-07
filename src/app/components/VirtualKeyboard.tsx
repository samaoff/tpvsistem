// components/VirtualKeyboard.tsx
import React, { useState } from "react";

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onClose,
}) => {
  const [isShift, setIsShift] = useState(false);
  const numberKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Borrar",
  ];
  // Alterna entre letras mayúsculas y minúsculas según el estado de "Shift"
  const letterKeys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ].map((letter) => (isShift ? letter.toUpperCase() : letter.toLowerCase()));

  const handleShift = () => {
    setIsShift(!isShift); // Cambia el estado de "Shift"
  };
  return (
    <div className="h-full flex flex-col bg-slate-900 p-2 shadow-red-500">

      <div className="flex flex-grow bg-gray-900 ">


         


          {/*boton shift*/}
        <button
          className="btn bg-yellow-400 text-center font-mono text-blue-950 hover:text-blue-950 hover:bg-red-300 w-14 h-14 m-1"
          onClick={handleShift}
        >
          {isShift ? "Mayus" : "Minus"}
        </button>


        
        {/* Letras a la derecha */}

        <div className="flex flex-wrap  justify-start gap-2 ">
          {letterKeys.map((key) => (
            <button
              key={key}
              className="btn bg-slate-300 text-center font-mono text-blue-950 hover:text-blue-950 hover:bg-red-300 w-20 h-20 m-1 text-xl "
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>



        {/* Números a la izquierda */}
        <div className="flex flex-wrap flex-row justify-items-center gap-1 border rounded-lg p-1">
          {numberKeys.map((key) => (

            key === "Borrar" ?
            <button
            key={key}
            className="btn bg-red-800 text-center font-mono text-white hover:text-blue-950 hover:bg-red-300 w-20 h-20 m-1 font-bold text-xl "
            onClick={() => onKeyPress(key)}
          >
            {key}
          </button> :

            <button
              key={key}
              className="btn bg-slate-300 text-center font-mono text-blue-950 hover:text-blue-950 hover:bg-red-300 w-20 h-20 m-1 font-bold text-xl  "
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
 {/* Botón cerrar */}
 <button
          className="btn bg-red-500 text-center font-mono text-white hover:text-blue-950 hover:bg-red-300 w-14 h-14 m-1 text-sm"
          onClick={onClose}>
          X
        </button>

      </div>
    </div>
  );
};

export default VirtualKeyboard;
