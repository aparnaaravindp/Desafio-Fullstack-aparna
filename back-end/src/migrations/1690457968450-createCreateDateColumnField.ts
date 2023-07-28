import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCreateDateColumnField1690457968450 implements MigrationInterface {
    name = 'CreateCreateDateColumnField1690457968450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "registrationDate" TO "createdAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "createdAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "createdAt" TO "registrationDate"`);
    }

}
