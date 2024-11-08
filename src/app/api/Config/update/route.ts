// src/app/api/updateConfig/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { nombreApp, version, licencia, theme } = await request.json();

  try {
    // Actualizamos el único registro de configuración
    const updatedParametro = await prisma.parametros.update({
      where: { id: 1 }, // Asegúrate de tener un solo registro de configuración
      data: { nombreApp, version, licencia, theme },
    });

    return NextResponse.json({ success: true, config: updatedParametro });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al actualizar la configuración' }, { status: 500 });
  }
}
