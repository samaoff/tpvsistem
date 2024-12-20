// src/app/api/empresa/get/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const empresa = await prisma.empresa.findFirst();
    return NextResponse.json({ success: true, data: empresa });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error al obtener datos' }, { status: 500 });
  }
}