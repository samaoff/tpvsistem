
echo Añadiendo cambios al área de staging...
git add .

echo Ingrese un mensaje para el commit:
set /p commit_message=
git commit -m "%commit_message%"

echo Subiendo cambios al repositorio remoto...
git push origin main

echo ¡Cambios subidos exitosamente!

