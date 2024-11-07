'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// Importar usuario por defecto
import defaultUser from './config/defaultUser';
import VirtualKeyboard from './components/VirtualKeyboard';
import VirtualKeyboardDrawer from './components/VirtualKeyboardDrawer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [currentField, setCurrentField] = useState<'email' | 'password' | null>(null);
  const [showToast2, setShowToast2] = useState(false);
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (field: 'email' | 'password' | 'metaKeywords' | 'metaDescription') => {
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
      setError('');
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
    <div className="flex flex-col h-screen">
      {/* Pantalla principal: 80% de la altura */}

      <div className="flex-grow h-4/5 flex items-center justify-center bg-gray-100">

     
        <div className="card w-96 bg-white shadow-xl ">
          <div className="card-body">
            <h1 className="text-4xl font-bold text-blue-800 text-center">Giupos</h1>
            <h5 className="text-1xl font-bold text-blue-800 text-center">Sistema de punto de venta</h5>
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
                  className="input input-bordered text-white hover:text-white"
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
                  className="input input-bordered text-white hover:text-grey-900"
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
                  <p className="text-sm text-gray-500">version zzzzzz</p>
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
        <div className="toast toast-center fixed top-10 z-50">
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
