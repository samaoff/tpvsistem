// src/app/api/usuarios/create/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { nombre, usuario, password, perfilId, activo, solotpv } = await request.json();

  try {
    // Crear el usuario en la base de datos
    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        usuario,
        password,  // Asegúrate de usar hash para el password en producción
        perfilId,
        activo,
        solotpv,
      },
    });

    return NextResponse.json({ success: true, data: newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return NextResponse.json({ success: false, error: 'Error al crear usuario' }, { status: 500 });
  }
}
