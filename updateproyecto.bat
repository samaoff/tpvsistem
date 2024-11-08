echo "Actualizando el repositorio local desde GitHub..."
git pull origin main

echo "Instalando dependencias del proyecto..."
npm install


echo "Genera el Cliente de Prisma..."
npx prisma generate

echo "Si la base de datos giupos.db está vacía o no tiene la estructura esperada, ejecuta las migraciones de Prisma para crear las tablas necesarias.."
npx prisma migrate dev


echo "¡El proyecto está actualizado y listo para trabajar!"