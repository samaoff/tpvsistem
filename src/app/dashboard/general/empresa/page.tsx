// app/empresa/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { SaveIcon } from 'lucide-react';
import VirtualKeyboardDrawer from '@/app/components/VirtualKeyboardDrawer';
import { useConfig } from '@/app/context/ConfigContext';

export default function EmpresaForm() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentField, setCurrentField] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [nombre, setNombre] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [cif, setCif] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cp, setCP] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [provincia, setProvincia] = useState('');
  const [pais, setPais] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [web, setWeb] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  // Accedemos al nombreempresa  y la función para actualizarlo
  const { empresaNombre, setEmpresaNombre } = useConfig();






  useEffect(() => {
    const fetchEmpresaData = async () => {
      try {
        const response = await fetch('/api/empresa/get');
        if (!response.ok) throw new Error("Error en la solicitud de la API");

        const result = await response.json();
        if (result.success) {
          const empresa = result.data;
          setNombre(empresa.nombre || '');
          setRazonSocial(empresa.razonSocial || '');
          setCif(empresa.cif || '');
          setDireccion(empresa.direccion || '');
          setCP(empresa.cp || '');
          setLocalidad(empresa.localidad || '');
          setProvincia(empresa.provincia || '');
          setPais(empresa.pais || '');
          setTelefono(empresa.telefono || '');
          setEmail(empresa.email || '');
          setWeb(empresa.web || '');
          setFacebook(empresa.facebook || '');
          setInstagram(empresa.instagram || '');

        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error('Error al obtener datos de la empresa:', error);
      }
    };

    fetchEmpresaData();
  }, []);


  // funcion para enviar los datos de la empresa a la base de datos
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/empresa/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          razonSocial,
          cif,
          direccion,
          cp,
          localidad,
          provincia,
          pais,
          telefono,
          email,
          web,
          facebook,
          instagram,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setEmpresaNombre(nombre); // Actualiza el nombre en el contexto
        console.log("Datos guardados exitosamente:", result.config);
      } else {
        console.error("Error al guardar datos:", result.error);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };




  const openDrawer = (field: string, value: string) => {
    setCurrentField(field);
    setInputValue(value);
    setIsDrawerOpen(true);
  };

  const handleKeyPress = (key: string) => {
    // Actualiza el valor de `inputValue` con la tecla presionada
    if (key === 'Borrar') {
      setInputValue((prev) => prev.slice(0, -1)); // Elimina el último carácter
    } else {
      setInputValue((prev) => prev + key); // Añade el carácter presionado
    }
  };

  const clearCurrentInput = () => {
    setInputValue(''); // Borra el contenido del input virtual
  };

  const handleCloseDrawer = () => {
    if (currentField) {
      if (currentField === 'nombre') setNombre(inputValue);
      else if (currentField === 'razonSocial') setRazonSocial(inputValue);
      else if (currentField === 'cif') setCif(inputValue);
      else if (currentField === 'direccion') setDireccion(inputValue);
      else if (currentField === 'cp') setCP(inputValue);
      else if (currentField === 'localidad') setLocalidad(inputValue);
      else if (currentField === 'provincia') setProvincia(inputValue);
      else if (currentField === 'pais') setPais(inputValue);
      else if (currentField === 'telefono') setTelefono(inputValue);
      else if (currentField === 'email') setEmail(inputValue);
      else if (currentField === 'web') setWeb(inputValue);
      else if (currentField === 'facebook') setFacebook(inputValue);
      else if (currentField === 'instagram') setInstagram(inputValue);

    }
    setIsDrawerOpen(false);
    setCurrentField(null);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-6">

  {/* Botones de acción en un contenedor fijo */}
  <div className="join join-horizontal fixed top-50 right-5  z-50 ">
  <button
    type="submit"
    className="btn join-item bg-base-content text-base-100 hover:bg-neutral-focus transition duration-200 flex items-center space-x-11 w-full h-42 rounded-full"
  >
    <SaveIcon className="w-5 h-5" />Guardar
  </button>
</div>
    
<div className='grid grid-cols-2 w-full '>


<div className="card bg-base-300 w-96 shadow-xl text-base-content grid ">
  <div className="card-body">
  <h2 className=" card-title font-bold text-base mb-6  ">Datos de la Empresa</h2>

     
        {/* nombres y cif */}
      
        <div className='grid grid-cols-2 gap-3'>
        <label className="block text-base">CIF</label>
          <input
            type="text"
            value={cif}
            onChange={(e) => setCif(e.target.value)}
            onFocus={() => openDrawer('cif', cif)}
            placeholder="CIF de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />
     
          <label className="block text-base">Nombre Fiscal</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onFocus={() => openDrawer('nombre', nombre)}
            placeholder="Nombre de la empresa"
            className="mt-1 w-full p-2 border rounded-md text-base-content"
          />

          <label className="block text-base">Razón Social</label>
          <input
            type="text"
            value={razonSocial}
            onChange={(e) => setRazonSocial(e.target.value)}
            onFocus={() => openDrawer('razonSocial', razonSocial)}
            placeholder="Razón social de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />

        </div>
   
  </div>

  
</div>
</div>




{/* otro card */}



<div className="card bg-base-300 w-full shadow-xl text-base-content grid ">
  <div className="card-body">
  <h2 className=" card-title font-bold text-base mb-6  ">Datos de la Empresa</h2>
         {/* datos direccion */}
      
        <div className='grid grid-cols-4 justify-start gap-3'>
        <label className="block text-base">Dirección</label>
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            onFocus={() => openDrawer('direccion', direccion)}
            placeholder="Dirección de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />
              <label className="block text-base">Codigo Postal</label>
          <input
            type="text"
            value={cp}
            onChange={(e) => setCP(e.target.value)}
            onFocus={() => openDrawer('cp', cp)}
            placeholder="Dirección de la empresa"
            className="mt-1 w-20 p-2 border rounded-md text-base-content"
          />


          <label className="block text-base">Localidad</label>
          <input
            type="text"
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
            onFocus={() => openDrawer('localidad', localidad)}
            placeholder="Localidad de la empresa"
            className="mt-1 w-34 p-2 border bg-base rounded-md text-base-content"
          />

          <label className="block text-base">Provincia</label>
          <input
            type="text"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            onFocus={() => openDrawer('provincia', provincia)}
            placeholder="Provincia de la empresa"
            className="mt-1 w-34 p-2 border bg-base rounded-md text-base-content"
          />


          <label className="block text-base">País</label>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            onFocus={() => openDrawer('pais', pais)}
            placeholder="País de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />
          <label className="block text-base">Teléfono</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            onFocus={() => openDrawer('telefono', telefono)}
            placeholder="Teléfono de la empresa"
            className="w-40 p-2 border bg-base rounded-md text-base-content"
          />
          <label className="block text-base">Email</label>
           <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => openDrawer('email', email)}
            placeholder="Email de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />
        </div>
  </div>
</div>

<div className="card bg-base-300 w-full shadow-xl text-base-content grid ">
<div className="card-body">
<h2 className=" card-title font-bold text-base mb-6  ">Otros Datos</h2>

{/* web redes sociales */}
          <label className="block text-base">Web</label>
          <input
            type="text"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
            onFocus={() => openDrawer('web', web)}
            placeholder="Web de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />

<label className="block text-base">Facebook</label>
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            onFocus={() => openDrawer('facebook', facebook)}
            placeholder="Facebook de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />

<label className="block text-base">Instagram</label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            onFocus={() => openDrawer('instagram', instagram)}
            placeholder="Instagram de la empresa"
            className="mt-1 w-full p-2 border bg-base rounded-md text-base-content"
          />

        </div>
        <div>
        
        </div>
        <div>
        
        </div>
        </div>
  
  
      </form>

      {/* Drawer del Teclado Virtual */}
      {isDrawerOpen && (
        <VirtualKeyboardDrawer
          onInputChange={setInputValue}
          onKeyPress={handleKeyPress}
          onClose={handleCloseDrawer}
          inputValue={inputValue}
          onClearAll={clearCurrentInput} // Llama a clearCurrentInput cuando "Borrar todo" es presionado
        />
      )}

    </>
   
  );
}
