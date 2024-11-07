// app/dashboard/layout.tsx
import { ReactNode } from "react";
import {
  HomeIcon,
  LucideLogOut,
  Presentation,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Barra lateral */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-5">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
          <h2 className="text-3xl font-semibold text-blue-600">GIUPOS</h2>
          <h2 className="text-sm font-semibold text-blue-600">
            Sistema de punto de venta
          </h2>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto h-full gap-5 nav-scroll">
          {/* Menú principal */}
          <ul className="menu rounded-box w-full text-lg space-y-4">
            {/* Opción de Inicio */}
            <li className="bg-blue-950 text-white rounded-md">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 p-2 "
              >
                <HomeIcon className="w-5 h-5 text-white" />
                <span>Inicio</span>
              </Link>
            </li>
  
            {/* Opción de General con submenús */}
            <li>
              <details>
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>General</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general/empresa"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Empresa</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Locales</span>
                    </Link>
                  </li>
                  <li>
                    <details>
                      <summary className="flex items-center space-x-2cursor-pointer hover:bg-blue-100 rounded-md p-2">
                        <span>Terminales</span>
                      </summary>
                      <ul className="pl-4">
                        <li>
                          <Link
                            href="/dashboard/tarifas"
                            className=" hover:bg-blue-100 rounded-md p-2"
                          >
                            11
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/herramientas"
                            className=" hover:bg-blue-100 rounded-md p-2"
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
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>Usuarios</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Perfiles de usuarios</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Usuarios</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

    

            {/* Opción de administracion con submenús */}
            <li>
              <details >
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>Administración</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Productos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Menus</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Alergenos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Impresoras</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Notas de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Orden de preparacion</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Mesas</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Ubicaciones</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Notas de preparacion</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de tarifas y precios con submenús */}
            <li>
              <details >
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>Tarifas</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Impuestos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Formas de pago</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Precios globales</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Promociones</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Descuentos</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de herramientas con submenús */}
            <li>
              <details>
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>Herramientas</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Ordenar familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Ordenar articulos</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Opción de informes con submenús */}
            <li>
              <details>
                <summary className="bg-blue-950 text-white flex items-center space-x-3 p-2 hover:bg-blue-950 ">
                  <Presentation className="w-5 h-5 text-white" />
                  <span>Informes</span>
                </summary>
                <ul className="text-blue-950">
                  <li>
                    <Link
                      href="/dashboard/general"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Resumen de ventas</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Resumen fiscal</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Resumen de caja</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span className="">Informe por familias</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Informe por productos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Informe forma de pagos</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/configuracion"
                      className="flex items-center space-x-2 hover:bg-blue-100 rounded-md p-2"
                    >
                      <span>Informe forma de usuario</span>
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
          
            <span>Cerrar sesión</span>
          </Link>
            </div>
      
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
