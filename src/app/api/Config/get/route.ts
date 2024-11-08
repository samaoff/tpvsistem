// src/app/api/getConfig/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Obtenemos el único registro de configuración
    const parametros = await prisma.parametros.findFirst();

    if (parametros) {
      return NextResponse.json({ success: true, config: parametros });
    } else {
      return NextResponse.json({ success: false, error: 'No se encontraron parámetros' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al obtener la configuración' }, { status: 500 });
  }
}
