// header fijo en la parte superior de la pantalla
// con un boton para abrir el menu lateral

import React from "react";
import Link from "next/link";
import { LucideAArrowDown, LucideArrowBigRightDash, LucideSettings } from "lucide-react";
import { useConfig } from "../../context/ConfigContext";

export const Header = () => {
  const { empresaNombre } = useConfig();
  return (
    <div className="navbar flex flex-row items-center p-3">
      <div className="flex-1">
        <div className="flex text-center flex-col items-start">
          <h1 className="text-2xl font-bold">{empresaNombre}</h1>
          <h6 className="text-sm font-mono">Licencia pro</h6>
        </div>
 
      </div>

      <div className="flex bg flex-row justify-start items-center">
      <div className="join join-vertical lg:join-horizontal">
      <button className="btn join-item"> <Link href="/dashboard/ajustes">
          <LucideSettings></LucideSettings>
        </Link></button>
  <button className="btn join-item font-bold text-2xl bg-base-content text-base-100"><LucideArrowBigRightDash></LucideArrowBigRightDash>Punto de venta</button>

</div>
     
      </div>
    </div>

    // header fijo en la parte superior de la pantalla
    //     <div className="h-20 bg-base-100 w-ful flex flex-row items-center p-3 ">
    // {/* boton para abrir ajustes del sistema */}
    //     <Link href="/dashboard/ajustes"><button className="btn btn-square"><LucideSettings></LucideSettings></button></Link>

    //         {/* titulo restaurante */}
    //         <div className=" h-full px-4">

    //             <div className="flex text-center flex-col items-start">
    //                 <h1 className="text-2xl font-bold">{config?.nombreApp}</h1>
    //                 <h6 className="text-sm font-mono">Licencia pro</h6>

    //             </div>

    //             </div>

    //     </div>
  );
};
