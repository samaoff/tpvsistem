-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT  ,
    "razonSocial" TEXT  ,
    "cif" TEXT  ,
    "direccion" TEXT  ,
    "cp" TEXT  ,
    "localidad" TEXT  ,
    "provincia" TEXT  ,
    "pais" TEXT  ,
    "telefono" TEXT  ,
    "email" TEXT  ,
    "web" TEXT  ,
    "logo" TEXT  ,
    "instagram" TEXT  ,
    "facebook" TEXT  
);



-- Inserta una fila por defecto en la tabla Empresa
INSERT INTO "Empresa" 
  (nombre, razonSocial, cif, direccion, cp, localidad, 
  provincia, pais,
  telefono, email, web, logo, instagram, facebook) 
VALUES 
  ('Empresa Demo', 'Demo S.A.', 'A12345678', 'Calle Falsa 123', '07011', 
  'Palma', 'Palma de mallorca', 'España', '123456789', 
  'info@demo.com', 'https://demo.com', NULL, NULL, NULL);


-- CreateTable
CREATE TABLE "Familia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT  ,
    "imagen" TEXT  
);


-- Inserta filas de ejemplo en la tabla Familia
INSERT INTO "Familia" (nombre, descripcion, imagen) VALUES 
  ('Entrantes', 'Platos para abrir el apetito antes del plato principal', 'https://example.com/entrantes.png'),
  ('Ensaladas', 'Variedad de ensaladas frescas y saludables', 'https://example.com/ensaladas.png'),
  ('Pastas', 'Diversos tipos de pasta italiana y sus salsas', 'https://example.com/pastas.png'),
  ('Carnes', 'Platos de carne preparados a la parrilla o al horno', 'https://example.com/carnes.png'),
  ('Pescados', 'Pescados y mariscos frescos', 'https://example.com/pescados.png'),
  ('Postres', 'Dulces y postres caseros para finalizar la comida', 'https://example.com/postres.png'),
  ('Bebidas', 'Bebidas alcohólicas y sin alcohol', 'https://example.com/bebidas.png'),
  ('Sopas', 'Sopas calientes y frías', 'https://example.com/sopas.png'),
  ('Pizzas', 'Variedad de pizzas con diferentes ingredientes', 'https://example.com/pizzas.png'),
  ('Especialidades', 'Platos especiales de la casa', 'https://example.com/especialidades.png');

-- CreateTable
CREATE TABLE "Alergenos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL
);


-- Inserta filas por defecto en la tabla Alergenos
INSERT INTO "Alergenos" (nombre, descripcion, imagen) VALUES 
  ('Gluten', 'Cereal que contiene gluten', 'https://example.com/gluten.png'),
  ('Crustáceos', 'Contiene crustáceos', 'https://example.com/crustaceos.png'),
  ('Huevos', 'Contiene huevo', 'https://example.com/huevo.png'),
  ('Pescado', 'Contiene pescado', 'https://example.com/pescado.png'),
  ('Cacahuetes', 'Contiene cacahuetes', 'https://example.com/cacahuetes.png'),
  ('Soja', 'Contiene soja', 'https://example.com/soja.png'),
  ('Lácteos', 'Contiene lácteos', 'https://example.com/lacteos.png'),
  ('Frutos de cáscara', 'Contiene frutos de cáscara', 'https://example.com/frutos_cascara.png'),
  ('Apio', 'Contiene apio', 'https://example.com/apio.png'),
  ('Mostaza', 'Contiene mostaza', 'https://example.com/mostaza.png'),
  ('Sésamo', 'Contiene semillas de sésamo', 'https://example.com/sesamo.png'),
  ('Sulfitos', 'Contiene sulfitos', 'https://example.com/sulfitos.png'),
  ('Altramuces', 'Contiene altramuces', 'https://example.com/altramuces.png'),
  ('Moluscos', 'Contiene moluscos', 'https://example.com/moluscos.png');


-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parametros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreApp" TEXT NOT NULL DEFAULT 'Giupos',
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "licencia" TEXT,
    "theme" TEXT NOT NULL DEFAULT 'oscuro'
);
INSERT INTO "new_Parametros" ("id", "licencia", "nombreApp", "theme", "version") SELECT "id", "licencia", "nombreApp", "theme", "version" FROM "Parametros";
DROP TABLE "Parametros";
ALTER TABLE "new_Parametros" RENAME TO "Parametros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
