'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Importar usuario por defecto

import defaultUser from './config/defaultUser';

import VirtualKeyboardDrawer from './components/VirtualKeyboardDrawer';
import { useConfig } from './context/ConfigContext';

export default function LoginPage() {


  const {config} = useConfig();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [currentField, setCurrentField] = useState<'email' | 'password' | null>(null);
  const [showToast2, setShowToast2] = useState(false);
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (field: 'email' | 'password') => {
    setCurrentField(field);
    setIsDrawerOpen(true);
  };


  const handleKeyPress = (key: string) => {
    if (key === 'Borrar') {
      if (currentField === 'email') {
        setEmail(email.slice(0, -1));
      } else if (currentField === 'password') {
        setPassword(password.slice(0, -1));
      }
    } else {
      if (currentField === 'email') {
        setEmail(email + key);
      } else if (currentField === 'password') {
        setPassword(password + key);
      }
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === defaultUser.email && password === defaultUser.password) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        router.push('/dashboard');
      }, 1000); // Espera 1 segundo antes de redirigir
    } else {
      setShowToast2(true);
      setTimeout(() => {
        setShowToast2(false);
      }, 3000);
    }
  };






  return (
    <div className=" flex flex-row h-screen text-base-content bg-base-200 shadow-2xl shadow-slate-400">


      <div  className="flex-grow flex items-center justify-center ">

     
      <div className="card bg-base-300 shadow-xl
  w-11/12 h-5/6            <!-- Para pantallas extra pequeñas, ocupa el 92% del ancho y el 83% del alto -->
  xs:w-10/12 xs:h-5/6      <!-- Para XS, ocupa 83% del ancho y 83% del alto -->
  sm:w-3/4 sm:h-3/4        <!-- Para SM, ocupa el 75% del ancho y 75% del alto -->
  md:w-2/3 md:h-2/3        <!-- Para MD, ocupa el 66% del ancho y 66% del alto -->
  lg:w-1/2 lg:h-3/4        <!-- Para LG, ocupa el 50% del ancho y 75% del alto -->
  xl:w-5/12 xl:h-2/3       <!-- Para XL, ocupa el 41% del ancho y 66% del alto -->
  2xl:w-1/3 2xl:h-1/2      <!-- Para 2XL, ocupa el 33% del ancho y 50% del alto -->
  3xl:w-1/3 3xl:h-1/2      <!-- Para 3XL, ocupa el 33% del ancho y 50% del alto -->
  mx-auto my-auto flex items-center justify-center
">
  <div className="card-body w-11/12 h-5/6            <!-- Para pantallas extra pequeñas, ocupa el 92% del ancho y el 83% del alto -->
  xs:w-10/12 xs:h-5/6      <!-- Para XS, ocupa 83% del ancho y 83% del alto -->
  sm:w-3/4 sm:h-3/4        <!-- Para SM, ocupa el 75% del ancho y 75% del alto -->
  md:w-2/3 md:h-2/3        <!-- Para MD, ocupa el 66% del ancho y 66% del alto -->
  lg:w-1/2 lg:h-3/4        <!-- Para LG, ocupa el 50% del ancho y 75% del alto -->
  xl:w-5/12 xl:h-2/3       <!-- Para XL, ocupa el 41% del ancho y 66% del alto -->
  2xl:w-1/3 2xl:h-1/2      <!-- Para 2XL, ocupa el 33% del ancho y 50% del alto -->
  3xl:w-1/3 3xl:h-1/2      <!-- Para 3XL, ocupa el 33% del ancho y 50% del alto -->
  mx-auto my-auto ">
            <h1 className="text-4xl font-bold text-base-content text-center">{config?.nombreApp}</h1>
            <h5 className="text-1xl font-bold text-base-content text-center">Sistema de punto de venta</h5>
            <div className="divider"></div>
            {/* <h2 className="card-title">Iniciar Sesión</h2> */}
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Usuario</span>
                </label>
                <input
                  type="text"
                  placeholder="Usuario"
                  className="input input-bordered text-base-content"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // onFocus={() => setCurrentField('email')}
                  onFocus={() => openDrawer('email')}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contraseña</span>
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="input input-bordered text-base-content"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // onFocus={() => setCurrentField('password')}
                  onFocus={() => openDrawer('password')}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" 
                className="btn text-white bg-blue-800 hover:text-white">
                  Iniciar Sesión
                </button>
                <div className="divider"></div>
                <div className="text-center mt-4">
                  <p className="text-smtext-base-100">Versión: {config?.version}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        
      </div>

        {/* Drawer del Teclado Virtual */}
        {isDrawerOpen && (
        <VirtualKeyboardDrawer
          onKeyPress={handleKeyPress}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Teclado virtual: 20% de la altura
      {currentField && (
        <div className="h-2/2 bg-gray-200 p-1 w-full">
          <VirtualKeyboard
            onKeyPress={handleKeyPress}
            onClose={() => setCurrentField(null)} // Cerrar teclado al presionar el botón "Cerrar"
          />
        </div>
      )} */}

      {/* Notificación de éxito */}
      {showToast && (
        <div className="toast toast-middle fixed top-10 z-50">
          <div className="alert alert-success text-white">
            <span>Inicio de sesión exitoso.</span>
          </div>
        </div>
      )}

      {/* Notificación de error */}
      {showToast2 && (
        <div className="toast toast-center fixed top-10 z-50">
          <div className="alert alert-error text-white">
            <span>Usuario o contraseña incorrectos</span>
          </div>
        </div>
      )}
    </div>
  );
}
