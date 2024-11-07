// components/VirtualKeyboardDrawer.tsx
import React, { useState } from 'react';

interface VirtualKeyboardDrawerProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const VirtualKeyboardDrawer: React.FC<VirtualKeyboardDrawerProps> = ({ onKeyPress, onClose }) => {

  const [isShiftActive, setIsShiftActive] = useState(false);


  const letterKeys = [
   
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

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

   // Función para cambiar el estado de Shift
   const toggleShift = () => {
    setIsShiftActive(!isShiftActive);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-950  p-4 shadow-2xl text-white transform transition-transform duration-300 z-50">
    {/* Encabezado */}
    <div className="flex justify-between items-center mb-1">
      <h2 className="text-lg font-semibold text-white">Teclado Virtual</h2>
      <button onClick={onClose} className="btn bg-red-500 text-center font-mono text-white hover:text-blue-950 hover:bg-red-300 w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 m-1 text-sm">        Cerrar
      </button>
    </div>

    {/* Contenedor principal: Dividido en letras y números */}
    <div className="flex  flex-col justify-between flex-wrap gap-4">
      {/* Letras a la izquierda */}
      <div className="flex flex-col space-y-2">
        {letterKeys.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center">
            {row.map((key) => (
              // <button
              //   key={key}
              //   onClick={() => onKeyPress(key)}
              //   className=" btn bg-slate-300 text-center font-mono text-blue-950 hover:text-blue-950 hover:bg-red-300 w-36 h-16 m-1 text-xl"
              // >
              //   {key}
              // </button>
              <button
                  key={key}
                  onClick={() => onKeyPress(isShiftActive ? key.toUpperCase() : key.toLowerCase())}
                  className="btn bg-slate-300 text-center font-mono text-blue-950 hover:text-blue-950 hover:bg-red-300 w-20 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 m-1 text-xl"
                >
                  {isShiftActive ? key.toUpperCase() : key.toLowerCase()}
                </button>
              
            ))}
            
          </div>
        ))}
      <div className="flex justify-center space-x-5 mt-4 w-50 ">
      <button onClick={toggleShift} className={`w-20 h-16 rounded shadow font-bold ${isShiftActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-gray-300`}>
              Shift
            </button>
        <button onClick={() => onKeyPress(' ')} className="w-80 h-16 bg-gray-100 rounded shadow text-gray-700 hover:bg-gray-300">Espacio</button>
        <button onClick={() => onKeyPress('Borrar')} className="w-20 h-16 bg-red-400 rounded shadow text-gray-700 hover:bg-gray-300">Borrar</button>
      </div>
      </div>

      {/* Números a la derecha */}
      <div className="flex  border  justify-center gap-5 border-white border-collapse rounded-xl bg-slate-50 bg-opacity-30 ">
        {numberKeys.map((key) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className={`btn text-center font-mono ${
              key === 'Borrar' ? 'bg-red-800 text-white' : 'bg-slate-300 text-blue-950'
            } hover:text-blue-950 hover:bg-red-300 w-20 h-20 m-1 font-bold text-xl`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>

    </div>
  );
};

export default VirtualKeyboardDrawer;
