// src/app/familias/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { LucideAArrowDown, LucideDelete, LucideEdit2, LucideTrash2 } from 'lucide-react';

interface alergenos {
  id: number;
  nombre: string;
  descripcion: string;
}

export default function AlergenosPage() {
  const [alergenos, setAlergenos] = useState<alergenos[]>([]);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fectAlergenos = async () => {
      try {
        const response = await axios.get('/api/alergenos/get'); // Llama a la API
        if (response.data.success) {
          setAlergenos(response.data.data); // Actualiza el estado con los datos obtenidos
        }
      } catch (error) {
        console.error('Error fetching familias:', error);
      }
    };

    fectAlergenos(); // Llama a la función para obtener datos
  }, []);

  return (
    <div className="card bg-base-300 p-5 text-base-content ">
      <h1 className="text-2xl font-semibold mb-4 ">Lista de Alergenos</h1>
      <table className="w-full table-auto -collapse">
        <thead>
          <tr className="bg-base-300">
            {/* <th className=" px-4 py-2">ID</th> */}
            <th className=" px-4 py-2">Nombre</th>
            <th className=" px-4 py-2">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {alergenos.map((alergenos) => (
            <tr key={alergenos.id}>
              {/* <td className=" px-4 py-2">{alergenos.id}</td> */}
              <td className=" px-4 py-2">{alergenos.nombre}</td>
              <td className=" px-4 py-2">{alergenos.descripcion}</td>
              <td className=" px-4 py-2">
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
