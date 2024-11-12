// src/app/api/updateConfig/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { console } from 'inspector';

const prisma = new PrismaClient();

export async function POST(request: Request) {


  const { nombre,cif, cp, direccion, email, telefono, 
    web, facebook, instagram,localidad,pais,provincia,razonSocial } = await request.json();

  try {
    // Actualizamos el único registro de configuración
    const updateEmpresa = await prisma.empresa.update({
      where: { id: 1 }, // Asegúrate de tener un solo registro de configuración
      data: { nombre,cif, cp, direccion, 
        email, telefono, web, facebook, instagram,localidad,pais,provincia,razonSocial
        },
    });

    return NextResponse.json({ success: true, config: updateEmpresa });
  } catch (error) {
    console.debug(error);
    return NextResponse.json({ success: false, error: 'Error al actualizar la configuración' }, { status: 500 });
  }
}
