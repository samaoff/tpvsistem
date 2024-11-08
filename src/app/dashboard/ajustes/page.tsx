"use client";


import { Divide } from 'lucide';
import { useConfig } from '../../context/ConfigContext';
import { useState } from 'react';
import { DivideCircle } from 'lucide-react';

export default function Settings() {
  const { config, updateConfig } = useConfig();
  const [appName, setAppName] = useState(config?.nombreApp || '');

  const handleSave = () => {
    updateConfig('nombreApp', appName);
  };

  return (
    <div className="p-4">
      <h2>Configuración</h2>
      <p>Personaliza la apariencia del sistema.</p>
      <div className="form-control">
        <label className="label">
          <span className="font-semibold text-base">Nombre de la Aplicación</span>
        </label>
        <input
          type="text"
          value={appName}
          onChange={(e) => setAppName(e.target.value)}
          className="input input-bordered"
        />
      </div>
      <br />
      <div className="flex flex-col space-y-4 p-4 bg-base-300 shadow-xl rounded-lg">
  <h3 className="text-lg font-semibold text-gray-700">Seleccionar Tema</h3>
  <div className="flex space-x-4">
    <button
      onClick={() => updateConfig('theme', 'light')}
      className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800"
    >
      Claro
    </button>
    <button
      onClick={() => updateConfig('theme', 'dracula')}
      className="px-4 py-2 rounded-lg bg-gray-800 text-white "
    >
      Oscuro
    </button>
    <button
      onClick={() => updateConfig('theme', 'retro')}
      className="px-4 py-2 rounded-lg bg-amber-100 text-black text-white"
    >
      Retro
    </button>
    <button
      onClick={() => updateConfig('theme', 'synthwave')}
      className="px-4 py-2 rounded-lg bg-neutral text-white"
    >
      Synthwave
    </button>




  </div>
</div>

      <button onClick={handleSave} className="btn mt-4">
        Guardar Cambios
      </button>
    </div>
  );
}