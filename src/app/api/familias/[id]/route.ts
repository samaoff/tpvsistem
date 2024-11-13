// src/app/api/familias/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Obtener todas las familias
export async function GET() {
  const familias = await prisma.familia.findMany();
  return NextResponse.json({ success: true, data: familias });
}

// Crear una nueva familia
export async function POST(request: Request) {
  const data = await request.json();
  const newFamilia = await prisma.familia.create({ data });
  return NextResponse.json({ success: true, data: newFamilia });
}

// Actualizar una familia
export async function PUT(request: Request) {
  const { id, ...data } = await request.json();
  const updatedFamilia = await prisma.familia.update({ where: { id }, data });
  return NextResponse.json({ success: true, data: updatedFamilia });
}

// Eliminar una familia
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.familia.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
