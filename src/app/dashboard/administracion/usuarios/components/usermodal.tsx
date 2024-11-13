// components/UserModal.tsx
import React, { useState, useEffect } from 'react';

interface Perfil {
  id: number;
  nombre: string;
}

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (userData: {
    nombre: string;
    usuario: string;
    password: string;
    perfilId: number;
    activo: boolean;
    solotpv: boolean;
  }) => void;
  perfiles: Perfil[];
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave, perfiles }) => {
  const [nombre, setNombre] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [perfilId, setPerfilId] = useState<number>(perfiles[0]?.id || 1);
  const [activo, setActivo] = useState(true);
  const [solotpv, setSolotpv] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNombre('');
      setUsuario('');
      setPassword('');
      setPerfilId(perfiles[0]?.id || 1);
      setActivo(true);
      setSolotpv(false);
    }
  }, [isOpen, perfiles]);

  const handleSave = () => {
    if (!nombre || !usuario || !password || !perfilId) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    onSave({ nombre, usuario, password, perfilId, activo, solotpv });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Agregar Usuario</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <select
          value={perfilId}
          onChange={(e) => setPerfilId(Number(e.target.value))}
          className="w-full mb-3 p-2 border rounded-md"
        >
          <option value="" disabled>Selecciona un perfil</option>
          {perfiles.map((perfil) => (
            <option key={perfil.id} value={perfil.id}>{perfil.nombre}</option>
          ))}
        </select>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={activo}
            onChange={() => setActivo(!activo)}
            className="mr-2"
          />
          <label>Activo</label>
        </div>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={solotpv}
            onChange={() => setSolotpv(!solotpv)}
            className="mr-2"
          />
          <label>Solo TPV</label>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
