-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alergenos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "imagen" TEXT
);
INSERT INTO "new_Alergenos" ("descripcion", "id", "imagen", "nombre") SELECT "descripcion", "id", "imagen", "nombre" FROM "Alergenos";
DROP TABLE "Alergenos";
ALTER TABLE "new_Alergenos" RENAME TO "Alergenos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
