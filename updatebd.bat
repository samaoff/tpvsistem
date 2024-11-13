@echo off
echo "Cerrando procesos de desarrollo (Node.js y Electron)..."

REM Cierra cualquier proceso node o electron en ejecución (silencia errores si no están corriendo)
taskkill /F /IM node.exe /T >nul 2>&1
taskkill /F /IM electron.exe /T >nul 2>&1

echo "Procesos cerrados."

REM Actualizar base de datos con Prisma
echo "Actualizando base de datos..."
npx prisma migrate dev --name update

REM Generar cliente de Prisma
echo "Generando cliente de Prisma..."
npx prisma generate

echo "Base de datos y cliente actualizados correctamente."

REM Pausa para ver los resultados
pause
