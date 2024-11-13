// src/app/api/perfiles/get/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const perfiles = await prisma.perfil.findMany();
    return NextResponse.json({ success: true, data: perfiles });
  } catch (error) {
    console.error('Error fetching perfiles:', error);
    return NextResponse.json({ success: false, error: 'Error fetching perfiles' }, { status: 500 });
  }
}
