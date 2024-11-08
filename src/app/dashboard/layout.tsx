'use client';
import {
  HomeIcon,
  LucideLogOut,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { useConfig } from "../context/ConfigContext";



export default function DashboardLayout({ children }: { children: ReactNode }) {

  const {config} = useConfig();

  return (
    
    <div className="flex h-screen text-base-content ">

      {/* Barra lateral */}
      <aside className="w-64 shadow-xl flex flex-col ">
        <div className="p-7">
          <Image src="/favicon.ico" alt="Logo" width={100} height={100} className="justify-center"/> <br /> 
          <h2 className="text-3xl font-semibold">{config?.nombreApp}</h2>
          <h2 className="text-sm font-semibold">
            Sistema de punto de venta
          </h2>
          <h6 className="text-sm font-mono">
            Versión: {config?.version}
          </h6>
        </div>
        <br />
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
                      href="/dashboard/general"
                      className="flex items-center space-x-2 rounded-md p-2"
                    >
                         <span className="text-base">Perfiles de usuarios</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
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
                      href="/dashboard/general"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Productos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Menus</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Alergenos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Impresoras</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Notas de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Orden de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Mesas</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Ubicaciones</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Notas de preparacion</span>
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
      <li>
              <details>
                   <summary className="bg-base-300 text-base flex items-center space-x-3 p-2 font-bold">
                  <Presentation className="w-5 h-5 text-base" />
                  <span className="text-base">Ajustes</span>
                </summary>
                <ul className="">
                  <li>
                    <Link
                      href="/dashboard/ajustes"
                      className="flex items-center space-x-2rounded-md p-2"
                    >
                         <span className="text-base">Ajustes Generales</span>
                    </Link>
                  </li>
                 
                </ul>
              </details>
            </li>




       
          



       
          </ul>
        </nav>
      






      {/* cerrar session */}
        <div className=" bg-red-400 text-white md:container p-5">
            <div className="flex items-center space-x-2 p-2 ">

            <LucideLogOut className="w-10 h-8 " />
          <Link href="/" className="font-mono font-bold">
          
               <span className="text-base">Cerrar sesión</span>
          </Link>
            </div>
      
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
