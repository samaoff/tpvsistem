"use client";

import { useConfig } from '../../context/ConfigContext';
import { useState } from 'react';

export default function Settings() {
  const { config, updateConfig } = useConfig();
  const [appName, setAppName] = useState(config?.nombreApp || '');

  const handleSave = () => {
    updateConfig('nombreApp', appName);
  
  };

  return (
    <div className="p-10 card bg-base-300 text-base-content">
      <h2 className="font-semibold text-lg">Ajustes</h2>
      <p>Personaliza la apariencia del sistema.</p>
      <div className="form-control mt-5">
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
      <h3 className="font-semibold text-base mt-5">Seleccionar Tema</h3>
      <div className="w-full">
  
  <div className="flex-col columns-5 ">
    <button
      onClick={() => updateConfig('theme', 'light')}
      className="w-28 h-14 rounded-lg bg-gray-200 text-gray-800 m-2"
    >
      Claro
    </button>
    <button
      onClick={() => updateConfig('theme', 'dracula')}
      className="w-28 h-14 rounded-lg bg-gray-800 text-white m-2"
    >
      Oscuro
    </button>
    <button
      onClick={() => updateConfig('theme', 'retro')}
      className="w-28 h-14 rounded-lg bg-amber-100 text-black text-base m-2"
    >
      Retro
    </button>
    <button
      onClick={() => updateConfig('theme', 'synthwave')}
      className="w-28 h-14 rounded-lg bg-indigo-800 text-white m-2"
    >
      Synthwave
    </button>
    <button
      onClick={() => updateConfig('theme', 'coffee')}
      className="w-28 h-14 rounded-lg bg-yellow-950 text-white m-2"
    >
      Coffee
    </button>
    <button
      onClick={() => updateConfig('theme', 'pastel')}
      className="w-28 h-14 rounded-lg bg-slate-100 text-black m-2"
    >
      Pastel
    </button>
    <button
      onClick={() => updateConfig('theme', 'aqua')}
      className="w-28 h-14 rounded-lg bg-blue-500 text-white m-2"
    >
      Aqua
    </button>
    <button
      onClick={() => updateConfig('theme', 'valentine')}
      className="w-28 h-14 rounded-lg bg-pink-200 text-red-800 m-2"
    >
      Valentine
    </button>
    <button
      onClick={() => updateConfig('theme', 'forest')}
      className="w-28 h-14 rounded-lg bg-stone-900 text-white m-2"
    >
      Forest
    </button>
    <button
      onClick={() => updateConfig('theme', 'mytheme')}
      className="w-28 h-14 rounded-lg bg-stone-900 text-white m-2"
    >
      halloween
    </button>






  </div>
</div>

      <button onClick={handleSave} className="btn mt-4">
        Guardar Cambios
      </button>
    </div>
  );
}