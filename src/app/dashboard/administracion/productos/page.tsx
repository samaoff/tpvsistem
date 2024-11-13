// src/app/productos/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { LucideEdit2, LucideTrash2 } from 'lucide-react';

interface Productos {
  id: number;
  nombre: string;
  descripcion: string;
}

export default function ProductosPage() {
  const [productos, setProductos] = useState<Productos[]>([]);

  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchproductos = async () => {
      try {
        const response = await axios.get('/api/productos/get'); // Llama a la API
        if (response.data.success) {
          setProductos(response.data.data); // Actualiza el estado con los datos obtenidos
        }
      } catch (error) {
        console.error('Error fetching productos:', error);
      }
    };

    fetchproductos(); // Llama a la función para obtener datos
  }, []);

  return (
    <div className="card bg-base-300 p-5 text-base-content">
      <h1 className="text-2xl font-semibold mb-4">Lista de productos</h1>
      <table className="w-full table-auto -collapse">
        <thead>
          <tr className="bg-base-300">
            <th className=" px-4 py-2">ID</th>
            <th className=" px-4 py-2">Nombre</th>
            <th className=" px-4 py-2">Descripción</th>
            <th className=" px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td className=" px-4 py-2">{producto.id}</td>
              <td className=" px-4 py-2">{producto.nombre}</td>
              <td className=" px-4 py-2">{producto.descripcion}</td>
              <td className=" px-4 py-2">
                <div className='grid grid-cols-2'>
                  <LucideEdit2></LucideEdit2>
                  
                  <LucideTrash2 className='text-red-400'></LucideTrash2></div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
