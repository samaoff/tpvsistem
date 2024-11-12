// src/context/ConfigContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface Config {
  nombreApp: string;
  version: string;
  licencia?: string;
  terminal: string;
  theme: string;
}

interface ConfigContextProps {
  config: Config | null;
  empresaNombre: string;
  updateConfig: (key: keyof Config, value: string) => void;
  setEmpresaNombre: (nombre: string) => void;
}

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [empresaNombre, setEmpresaNombre] = useState<string>('');

  // Cargar configuración general y nombre de empresa al montar el componente
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/Config/get/');
        const data = await response.json();
        if (data.success) {
          setConfig(data.config);
        }
      } catch (error) {
        console.error('Error al cargar la configuración:', error);
      }
    };

    const fetchEmpresaData = async () => {
      try {
        const response = await fetch('/api/empresa/get');
        if (!response.ok) throw new Error('Error en la solicitud de la API');
        
        const result = await response.json();
        if (result.success) {
          setEmpresaNombre(result.data.nombre);
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error('Error al obtener el nombre de la empresa:', error);
      }
    };

    fetchConfig();
    fetchEmpresaData();
  }, []);






  // Función para actualizar configuración en la base de datos y en el estado
  const updateConfig = async (key: keyof Config, value: string) => {
    try {
      const response = await fetch('/api/Config/update/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [key]: value }),
      });

      if (response.ok) {
        setConfig((prevConfig) => ({
          ...prevConfig!,
          [key]: value,
        }));
      }
    } catch (error) {
      console.error('Error al actualizar la configuración:', error);
    }
  };

  return (
    <ConfigContext.Provider value={{ config, empresaNombre, updateConfig, setEmpresaNombre }}>
      <div data-theme={config?.theme} className="min-h-screen">
        {children}
      </div>
    </ConfigContext.Provider>
  );
};





export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig debe usarse dentro de ConfigProvider');
  }
  return context;
};
