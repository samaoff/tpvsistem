// components/VirtualKeyboardDrawer.tsx
import React, { useState } from 'react';

interface VirtualKeyboardDrawerProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
  onInputChange: (value: string) => void; // Recibe el valor del campo
  inputValue: string; // Recibe el valor actual del campo
  onClearAll: () => void;
}

const VirtualKeyboardDrawer: React.FC<VirtualKeyboardDrawerProps> = ({ 
  onKeyPress, 
  onClose,
  inputValue,
  onInputChange, 
  onClearAll  }) => {
  const [isShiftActive, setIsShiftActive] = useState(false);

  // Letras organizadas en filas
  const letterKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M','@', '.','_','Enter'],
  ];

  // Números y botones especiales
  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9',',','0', 'Borrar'];

  // Función para alternar Shift
  const toggleShift = () => {
    setIsShiftActive(!isShiftActive);
  };
  
  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      onKeyPress('\n');  // Puedes enviar el caracter "Enter" o ejecutar otra función
      onClose(); // Opcional: cerrar el teclado después de presionar "Enter"
    } else if (key === 'Borrar') {
       // Ejemplo: puedes enviar una acción de borrar
      onKeyPress('Borrar');
      
    } else {
      // tecla _ y - si se activa shift se convierte en _
      onKeyPress(isShiftActive ? key.toUpperCase(): key.toLowerCase());


    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 rounded-t-2xl
    transform transition-transform duration-300 ">


      {/* Encabezado con título y botón cerrar */}
      <div className="flex justify-between items-center mb-2 ">
        <h2 className="text-md font-semibold">Teclado Virtual</h2>
        
        <button onClick={onClose} className="sm:w-4/4 md:w-4/4 lg:w-4/4 xl:w4/4 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700">
          Cerrar
        </button>
      </div>
      <div className="mb-2">
      <input
        type="text"
        value={inputValue} // Muestra el valor actual del campo
        onChange={(e) => onInputChange(e.target.value)} // Permite la entrada física
        className="w-full mb-4 p-2 rounded-md bg-white text-gray-800 font-bold font-mono"
      />
      </div>
      {/* Contenedor principal: Columnas de letras y números */}
      <div className="flex justify-between gap-4 h-full">
        
        {/* Columnas de letras */}
        <div className="grid grid-cols-10 sm:gap-1 md:gap-1 lg:w-4/4 xl:w4/4 flex-1">
          {letterKeys.flat().map((key) => (
            <button
            
              key={key}
              onClick={() => handleKeyPress(key)}
              className="flex items-center justify-center
               bg-gray-700 text-white rounded-md p-6 h-full
                text-xs md:text-base lg:text-lg hover:opacity-90
                 hover:bg-blue-600" 
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
              onClick={() => handleKeyPress(key)}
              className={`flex items-center justify-center p-4 ${
                key === 'Borrar' ? 'bg-red-500' : 'bg-gray-700 hover:bg-blue-600 w-22'
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
          className={`w-32 h-10 bg-purple-500 text-white rounded-md text-xs md:text-base lg:text-lg font-semibold ${
            isShiftActive ? 'bg-purple-700' : ''
          } hover:bg-purple-600`}
        >
          Shift
        </button>
        <button
          onClick={() => handleKeyPress(' ')}
          className="flex-1 h-10 bg-gray-300 text-gray-800 rounded-md text-xs md:text-base lg:text-lg hover:bg-gray-400"
        >
          Espacio
        </button>
           <button
          onClick={onClearAll} // Llama a onClearAll en lugar de onClose
          className="w-32 h-10 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Borrar todo
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboardDrawer;
