// import { MigrationInterface, QueryRunner } from "typeorm";

// export class AlterPasswordColumnTypeTimestamp implements MigrationInterface {
//     public async up(queryRunner: QueryRunner): Promise<void> {
//         // Drop NOT NULL constraint
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
        
//         // Change column type to VARCHAR
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" TYPE VARCHAR`);

//         // Update existing records with a default password
//         await queryRunner.query(`UPDATE "user" SET "password" = 'default_password' WHERE "password" IS NULL`);
        
//         // Re-add NOT NULL constraint
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         // Drop NOT NULL constraint
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
        
//         // Change column type back to INTEGER (or the original type)
//         await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" TYPE INTEGER`);
//     }
// }

// //npx typeorm migration:create ./src/migrations/AlterUserPasswordColumn - criar a pasta
// //npm run build - buildar para js
// //npx typeorm migration:run -d ./build/src/data-source.js - rodar
// //npx typeorm migration:revert - reverter mudanças