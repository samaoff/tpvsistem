
## Sistema de punto de venta con nextjs (app) + electron + daisyui + tailwind 

Para iniciar el servidor

# Modo Electron (VENTANA DE WINDOWS)
```bash
npm run electron-dev
```
# Modo Web 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver los resultados.


# ACTUALIZACIONES PARA DESARROLLADORES EJECUTAR .BAT
Para tener proyecto actualizado entre equipos distintos antes de empezar a editar el codigo ejecuta ./updateproyecto.bat desde la terminal, eso actualizara el proyecto siempre desde github
```bash
#"Actualizando el repositorio local desde GitHub..."
git pull origin main

#"Instalando dependencias del proyecto si hemos instalado algunas..."
npm install

#"¡El proyecto está actualizado y listo para trabajar!"
```

# SUBIR EL PROYECTO CON LOS CAMBIOS EJECUTAR SUBIRPROYECTO.BAT
Para subir los cambios realizados ejecutar ./subirproyecto.bat desde la terminal, eso subira el proyecto a github 
```bash
#Añadiendo cambios al área de staging...
git add .

#Ingrese un mensaje para el commit:
set /p commit_message=
git commit -m "%commit_message%"

#Subiendo cambios al repositorio remoto...
git push origin main

#¡Cambios subidos exitosamente!
```


# KIT UI daisyUI - DISEÑO 
https://daisyui.com/docs/install/TA

# TAILWIND CSS
https://tailwindcss.com/docs/columns 