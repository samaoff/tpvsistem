echo "cierra todo lo que tengas abierto de la desarrolladora"
echo "actualizando base de datos"
npx prisma migrate dev --name update
echo "actualizando base de datos"
npx prisma generate