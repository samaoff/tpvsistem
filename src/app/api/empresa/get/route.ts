// src/app/api/getConfig/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtenemos el único registro de configuración
    const empresa = await prisma.empresa.findFirst();

    if (empresa) {
      return NextResponse.json({ success: true, config: empresa });
    } else {
      return NextResponse.json({ success: false, error: 'No se encontraron parámetros' }, { status: 404 });
    }
  } catch (error) {
    console.debug(error);
    return NextResponse.json({ success: false, error: 'Error al obtener la configuración' }, { status: 500 });
  }
}
