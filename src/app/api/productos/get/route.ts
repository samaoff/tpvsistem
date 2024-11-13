// src/app/api/familias/get/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const producto = await prisma.producto.findMany(); 
    return NextResponse.json({ success: true, data: producto });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error al obtener datos' }, { status: 500 });
  }
}