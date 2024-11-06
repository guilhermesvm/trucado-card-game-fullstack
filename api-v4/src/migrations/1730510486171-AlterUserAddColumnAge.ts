import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserAddColumnAge1730510486171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "age" VARCHAR`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }
}

// //npx typeorm migration:create ./src/migrations/AlterUserPasswordColumn - criar a pasta
// //npm run build - buildar para js
// //npx typeorm migration:run -d ./build/src/data-source.js - rodar
// //npx typeorm migration:revert -d .\build\src\data-source.js - reverter mudanças