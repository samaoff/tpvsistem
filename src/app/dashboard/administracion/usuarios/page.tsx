// src/app/Usuarios/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { LucideEdit2, LucideTrash2 } from 'lucide-react';
import UserModal from './components/usermodal';


interface Usuario {
  id: number;
  nombre: string;
  usuario: string;
  perfilId: number;
}

interface Perfil {
  id: number;
  nombre: string;
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [perfiles, setPerfiles] = useState<Perfil[]>([]); // Estado para perfiles
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('/api/usuarios/get');
        if (response.data.success) {
          setUsuarios(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching usuarios:', error);
      }
    };

    const fetchPerfiles = async () => {
      try {
        const response = await axios.get('/api/perfiles/get');
        if (response.data.success) {
          setPerfiles(response.data.data); // Guardamos los perfiles en el estado
        }
      } catch (error) {
        console.error('Error fetching perfiles:', error);
      }
    };

    fetchUsuarios();
    fetchPerfiles(); // Llama a la API de perfiles
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveUser = async (userData: Omit<Usuario, 'id'>) => {
    try {
      // Realiza una solicitud POST a la API para crear el nuevo usuario
      const response = await axios.post('/api/usuarios/create', userData);
      
      // Verifica si la respuesta de la API indica éxito
      if (response.data.success) {
        // Agrega el nuevo usuario a la lista actual de usuarios
        setUsuarios((prevUsuarios) => [...prevUsuarios, response.data.data]);
      } else {
        console.error("Error al crear el usuario:", response.data.error);
      }
    } catch (error) {
      console.error("Error al guardar el usuario:", error);
    } finally {
      // Cierra el modal después de guardar
      setIsModalOpen(false);
    }
  };

  return (
    <div className="card bg-base-300 p-5 text-base-content">
      <h1 className="text-2xl font-semibold mb-4">Lista de Usuarios</h1>
      <button onClick={handleOpenModal} className="mb-4 btn btn-primary">
        Agregar Usuario
      </button>

      <table className="w-full table-auto -collapse">
        <thead>
          <tr className="bg-base-300">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Usuario</th>
            <th className="px-4 py-2">Perfil</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td className="px-4 py-2">{usuario.id}</td>
              <td className="px-4 py-2">{usuario.nombre}</td>
              <td className="px-4 py-2">{usuario.usuario}</td>
              <td className="px-4 py-2">{usuario.perfilId}</td>
              <td className="px-4 py-2">
                <div className="grid grid-cols-2">
                  <LucideEdit2 />
                  <LucideTrash2 className="text-red-400" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pasamos los perfiles al UserModal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveUser}
        perfiles={perfiles}
      />
    </div>
  );
}
