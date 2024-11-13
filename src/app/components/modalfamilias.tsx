// components/ModalFamilia.tsx
import React, { useState, useEffect } from 'react';

interface ModalFamiliaProps {
  data: { nombre: string; descripcion: string };
  onSave: (nombre: string, descripcion: string) => void;
  onClose: () => void;
}

const ModalFamilia: React.FC<ModalFamiliaProps> = ({ data, onSave, onClose }) => {
  const [nombre, setNombre] = useState(data.nombre);
  const [descripcion, setDescripcion] = useState(data.descripcion);

  const handleSave = () => {
    onSave(nombre, descripcion);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Familia</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-purple-500 text-white rounded-md">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalFamilia;
