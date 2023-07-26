import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDeleteDateColumnField1690404554021 implements MigrationInterface {
    name = 'CreateDeleteDateColumnField1690404554021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

}
