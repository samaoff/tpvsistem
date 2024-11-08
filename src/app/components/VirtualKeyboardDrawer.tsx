// components/VirtualKeyboardDrawer.tsx
import React, { useState } from 'react';

interface VirtualKeyboardDrawerProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const VirtualKeyboardDrawer: React.FC<VirtualKeyboardDrawerProps> = ({ onKeyPress, onClose }) => {
  const [isShiftActive, setIsShiftActive] = useState(false);

  // Letras organizadas en filas
  const letterKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M','@', '.','_',','],
  ];

  // Números y botones especiales
  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Borrar','0'];

  // Función para alternar Shift
  const toggleShift = () => {
    setIsShiftActive(!isShiftActive);
  };
  

  return (
    <div className="fixed inset-x-0 bottom-0 h-75 bg-gray-800 text-white p-4 shadow-lg z-50 
    transform transition-transform duration-300">
      {/* Encabezado con título y botón cerrar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold">Teclado Virtual</h2>
        <button onClick={onClose} className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">
          Cerrar
        </button>
      </div>

      {/* Contenedor principal: Columnas de letras y números */}
      <div className="flex justify-between gap-4 h-full">
        {/* Columnas de letras */}
        <div className="grid grid-cols-10 gap-4 flex-1">
          {letterKeys.flat().map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(isShiftActive ? key.toUpperCase() : key.toLowerCase())}
              className="flex items-center justify-center bg-gray-700 text-white rounded-md p-5 h-full text-xs md:text-base lg:text-lg hover:bg-blue-600"
            >
              {isShiftActive ? key.toUpperCase() : key.toLowerCase()}
            </button>
          ))}
        </div>
        <div className="flex justify-between gap-2 h-full">
        {/* Columna de números y botones especiales */}
        <div className="grid grid-cols-3 gap-1 flex-1">
          {numberKeys.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`flex items-center justify-center p-4 ${
                key === 'Borrar' ? 'bg-red-500' : 'bg-gray-700 hover:bg-blue-600 w-32'
              } text-white rounded-md p-2 h-full text-xs md:text-base lg:text-lg hover:opacity-90`}
            >
              {key}
            </button>
          ))}
        </div>
      </div> </div>

      {/* Botones especiales: Shift, Espacio */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={toggleShift}
          className={`w-32 h-20 bg-purple-500 text-white rounded-md text-xs md:text-base lg:text-lg font-semibold ${
            isShiftActive ? 'bg-purple-700' : ''
          } hover:bg-purple-600`}
        >
          Shift
        </button>
        <button
          onClick={() => onKeyPress(' ')}
          className="flex-1 h-20 bg-gray-300 text-gray-800 rounded-md text-xs md:text-base lg:text-lg hover:bg-gray-400"
        >
          Espacio
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboardDrawer;
