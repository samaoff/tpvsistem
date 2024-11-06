// components/VirtualKeyboard.tsx
import React from 'react';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onClose: () => void;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress }) => {
  const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Borrar'];
  const letterKeys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Entrar',
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
       <div className="flex justify-end mb-2">
        <button className="btn btn-sm btn-outline" onClick={onclose}>
          Cerrar Teclado
        </button>
      </div>
      <div className="flex">
        {/* Letras */}
        <div className="flex flex-wrap w-2/3 justify-center space-x-2 bg">
          {letterKeys.map((key) => (
            <button
              key={key}
              className="btn btn-square w-14 h-14 m-2 bg-blue-950 text-white"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
        {/* Números */}
        <div className="flex flex-wrap w-1/3 justify-center space-x-2">
          {numberKeys.map((key) => (
            <button
              key={key}
              className="btn btn-outline w-14 h-14 m-1"
              onClick={() => onKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default VirtualKeyboard;
