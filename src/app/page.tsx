'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// importo el usuario por defecto
import defaultUser from './config/defaultUser'
import router from 'next/router';
import VirtualKeyboard from './components/VirtualKeyboard';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [currentField, setCurrentField] = useState<'email' | 'password' | null>(null);
  const [showToast2, setShowToast2] = useState(false);
  const router = useRouter();

  const handleKeyPress = (key: string) => {
    if (key === 'Borrar') {
      if (currentField === 'email') {
        setEmail(email.slice(0, -1));
      } else if (currentField === 'password') {
        setPassword(password.slice(0, -1));
      }
    } else if (key === 'Entrar') {
      handleSubmit();
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
        router.push('/dashboard'); // Redirigir a la página de dashboard
      }, 1000); // Espera 1 segundo para mostrar la toast antes de redirigir
    } else {
      setShowToast2(true);
      setTimeout(() => {
        setShowToast2(false);
        
      }, 3000);
    }
    // Aquí podrías manejar la lógica de autenticación
  };




  return (
    // Página principals
<div className="flex flex-col h-screen">

    <div className="flex-grow h-4/5 flex items-center justify-center bg-gray-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">App nombre</h1>
      <p className="py-6">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. VELIT
      </p>
    </div>
      
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Correo Electrónico</span>
              </label>
              <input
                type="text"
                placeholder="Usuario"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setCurrentField('email')}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setCurrentField('password')}
                readOnly
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>

{/* Mostrar teclado solo si un campo está enfocado */}
{currentField && <VirtualKeyboard onKeyPress={handleKeyPress} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } />}

{/* Toast Notification */}
{showToast && (
        <div className="toast toast-center">
          <div className="alert alert-success text-white">
            <span>Inicio de sesión exitoso.</span>
          </div>
        </div>
      )}
{showToast2 && (
        <div className="toast toast-center">
          <div className="alert alert-error text-white">
            <span>Usuario o contraseña erroneo</span>
          </div>
        </div>
      )}

    </div>
    </div>
{/* //fin de la pagina principal */}
</div>
  );
}
