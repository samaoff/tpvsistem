-- CreateTable
CREATE TABLE "Parametros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreApp" TEXT NOT NULL DEFAULT 'Giupos',
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "licencia" TEXT,
    "theme" TEXT NOT NULL DEFAULT 'acid'
);
