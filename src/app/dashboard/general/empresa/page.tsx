// app/empresa/page.tsx
'use client';

import { useState } from 'react';
import { SaveIcon } from 'lucide-react';
import VirtualKeyboardDrawer from '@/app/components/VirtualKeyboardDrawer';

export default function EmpresaForm() {
  const [nombre, setNombre] = useState('');
  const [defaultLayout, setDefaultLayout] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const [currentField, setCurrentField] = useState<'nombre' | 'metaTitle' | 'metaKeywords' | 'metaDescription' | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nombre,
      defaultLayout,
      metaTitle,
      metaKeywords,
      metaDescription,
    });
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Borrar') {
      if (currentField === 'nombre') setNombre(nombre.slice(0, -1));
      else if (currentField === 'metaTitle') setMetaTitle(metaTitle.slice(0, -1));
      else if (currentField === 'metaKeywords') setMetaKeywords(metaKeywords.slice(0, -1));
      else if (currentField === 'metaDescription') setMetaDescription(metaDescription.slice(0, -1));
    } else {
      if (currentField === 'nombre') setNombre(nombre + key);
      else if (currentField === 'metaTitle') setMetaTitle(metaTitle + key);
      else if (currentField === 'metaKeywords') setMetaKeywords(metaKeywords + key);
      else if (currentField === 'metaDescription') setMetaDescription(metaDescription + key);
    }
  };

  const openDrawer = (field: 'nombre' | 'metaTitle' | 'metaKeywords' | 'metaDescription') => {
    setCurrentField(field);
    setIsDrawerOpen(true);
  };

  return (
    <div className=" mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Datos de la Empresa</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-600">Nombre</label>
          <input
            type="text"
            value={nombre}
            readOnly
            onFocus={() => openDrawer('nombre')}
            placeholder="Nombre de la empresa"
            className="mt-1 w-full p-2 border bg-blue-950 rounded-md  text-white"
          />
        </div>

        <div>
          <label className="block text-gray-600">Default Layout</label>
          <select
            value={defaultLayout}
            onChange={(e) => setDefaultLayout(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select a layout</option>
            <option value="layout1">Layout 1</option>
            <option value="layout2">Layout 2</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Meta Title</label>
          <input
            type="text"
            value={metaTitle}
            readOnly
            onFocus={() => openDrawer('metaTitle')}
            placeholder="Set a simple and precise meta title"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Meta Keywords</label>
          <input
            type="text"
            value={metaKeywords}
            readOnly
            onFocus={() => openDrawer('metaKeywords')}
            placeholder="Set keywords related to the product"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-600">Meta Description</label>
          <textarea
            value={metaDescription}
            readOnly
            onFocus={() => openDrawer('metaDescription')}
            placeholder="Enter product meta description for better understanding"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md h-32 resize-none"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100"
            onClick={() => console.log('Cancelado')}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center space-x-2"
          >
            <SaveIcon className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>

      {/* Drawer del Teclado Virtual */}
      {isDrawerOpen && (
        <VirtualKeyboardDrawer
          onKeyPress={handleKeyPress}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
}
