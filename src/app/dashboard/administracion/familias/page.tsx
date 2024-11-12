'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/TablaFamilias';
import TablaFamilias from './components/TablaFamilias';



interface Familia {
  id: number;
  nombre: string;
  descripcion: string;
}

const FamiliasPage: React.FC = () => {
  const [familias, setFamilias] = useState<Familia[]>([]);

  useEffect(() => {
    axios.get('/api/familias/get')
      .then(response => {
        if (response.data.success) {
          setFamilias(response.data.data);
        }
      })
      .catch(error => console.error('Error fetching familias:', error));
  }, []);

  return (

   <div className="p-8">

   
      <h1 className="text-2xl font-semibold mb-4">Familias</h1>
      <DataTable data={familias} />
    </div>
  );
};

export default FamiliasPage;
