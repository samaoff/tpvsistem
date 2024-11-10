-- CreateTable
CREATE TABLE "Parametros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreApp" TEXT NOT NULL DEFAULT 'Giupos',
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "licencia" TEXT,
    "theme" TEXT NOT NULL DEFAULT 'acid'
);

-- Inserta una fila por defecto en la tabla Empresa
INSERT INTO "Parametros" 
  (nombreApp, version, licencia, theme) 
VALUES 
  ('GIUPOS', '1.0.0', '0', 'pastel');
