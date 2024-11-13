// src/app/api/alergenoss/get/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const alergenos = await prisma.alergenos.findMany(); // Obtener todas las alergenoss
    return NextResponse.json({ success: true, data: alergenos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error al obtener datos' }, { status: 500 });
  }
}