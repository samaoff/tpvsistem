-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parametros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombreApp" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "licencia" TEXT,
    "theme" TEXT NOT NULL
);
INSERT INTO "new_Parametros" ("id", "licencia", "nombreApp", "theme", "version") SELECT "id", "licencia", "nombreApp", "theme", "version" FROM "Parametros";
DROP TABLE "Parametros";
ALTER TABLE "new_Parametros" RENAME TO "Parametros";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
