'use client';
import {
  HomeIcon,
  LucideLogOut,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { useConfig } from "../context/ConfigContext";
import { Header } from "./components/header";



export default function DashboardLayout({ children }: { children: ReactNode }) {

  const {config} = useConfig();

  return (
    <div className="h-screen flex bg-base-200 text-base-content">
      {/* Sidebar - Barra lateral fija a la izquierda */}
      <aside className="w-60 h-full flex flex-col shadow-xl bg-base-100">
        <div className="p-4">
          <h2 className="text-3xl font-semibold">Giupos</h2>
          <h2 className="text-sm font-semibold">Sistema de punto de venta</h2>
          <h6 className="text-sm font-mono">Versión: {config?.version}</h6>
        </div>
        <nav className="flex-1 space-y-2 overflow-y-auto h-full gap-5 nav-scroll">
          {/* Menú principal */}
          <ul className="menu rounded-box w-full text-lg space-y-4">


            {/* Opción de Inicio */}
            <li>  <Link href="/dashboard" className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
            
                <HomeIcon className="w-5 h-5 text-base" />
              
                     <span className="text-base">Inicio</span>
                
                </Link>
              
              
              
            </li>
  
            {/* Opción de General con submenús */}
            <li>
              <details>
                <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">General</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/general/empresa"
                      className="flex items-center space-x-2 rounded-md p-2"
                    >
                      <span className="text-base">Empresa</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Locales</span>
                    </Link>
                  </li>
                  <li>
                    <details>
                    <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                           <span className="text-base">Terminales</span>
                      </summary>
                      <ul className="pl-4">
                        <li>
                          <Link
                            href="/dashboard/tarifas"
                            className="rounded-md p-2"
                          >
                            11
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/herramientas"
                            className="rounded-md p-2"
                          >
                            22
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de usuarios con submenús */}
            <li>
              <details >
                   <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Usuarios</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/administracion/perfilesusuarios"
                      className="flex items-center space-x-2 rounded-md p-2"
                    >
                         <span className="text-base">Perfiles de usuarios</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/usuarios"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Usuarios</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

    

            {/* Opción de administracion con submenús */}
            <li>
              <details >
                 <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Administración</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/administracion/familias"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/productos"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Productos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/menus"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Menus</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/alergenos"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Alergenos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/impresora"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Impresoras</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/administracion/notaspreparacion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Notas de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/dashboard/administracion/ordenpreparacion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Orden de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/dashboard/administracion/mesas"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Mesas</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/dashboard/administracion/ubicaciones"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Ubicaciones</span>
                    </Link>
                  </li>
         
                </ul>
              </details>
            </li>

            {/* Opción de tarifas y precios con submenús */}
            <li>
              <details >
                   <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Tarifas</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Impuestos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Formas de pago</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Precios globales</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Promociones</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Descuentos</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de herramientas con submenús */}
            <li>
              <details>
                   <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Herramientas</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Ordenar familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Ordenar articulos</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de informes con submenús */}
            <li>
              <details>
                   <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Informes</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Resumen de ventas</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Resumen fiscal</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Resumen de caja</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                      <span className="">Informe por familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Informe por productos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Informe forma de pagos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Informe forma de usuario</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
      {/* Opción de informes con submenús */}




       
          



       
          </ul>
        </nav>
      


     <div className=" bg-base-200 p-10 items-center justify-center w-full h-20 flex ">

    
      <Link href="/" className="font-mono font-bold">
          <LucideLogOut></LucideLogOut>
              
          </Link>
          </div>
          



      {/* cerrar session */}
        
      </aside>

      {/* Contenedor principal con Header y contenido */}
      <div className="flex-1 flex flex-col">
        {/* Header fijo en la parte superior */}
        <header className="sticky top-0 z-10 bg-base-100 text-base">
          <Header />
        </header>

      {/* Contenido principal */}
      <main className="flex-1 bg-base-100 text-neutral-content overflow-y-scroll p-5">

        {children}
        </main>
    
    </div>
  </div>
  );
}
