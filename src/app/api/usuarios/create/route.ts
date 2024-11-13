// src/app/api/usuarios/create/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { nombre, usuario, password, perfilId, activo, solotpv } = await request.json();

    const newUsuario = await prisma.usuario.create({
      data: { nombre, usuario, password, perfilId, activo, solotpv },
    });

    return NextResponse.json({ success: true, data: newUsuario });
  } catch (error) {
    console.error('Error creating usuario:', error);
    return NextResponse.json({ success: false, error: 'Error al crear usuario' });
  }
}
