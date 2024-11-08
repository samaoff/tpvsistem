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
  updateConfig: (key: keyof Config, value: string) => void; // Nueva función para actualizar configuración
}

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<Config | null>(null);

  // Cargar la configuración al montar el contexto
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

    fetchConfig();
  }, []);

  // Función para actualizar un valor de configuración
  const updateConfig = async (key: keyof Config, value: string) => {
    try {
      // Actualizar en la base de datos mediante el endpoint de la API
      const response = await fetch('/api/Config/update/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [key]: value }),
      });

      if (response.ok) {
        // Actualizar el estado local en el contexto
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
    <ConfigContext.Provider value={{ config, updateConfig }}>
      <div data-theme={config?.theme || 'acid'} className="min-h-screen">
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