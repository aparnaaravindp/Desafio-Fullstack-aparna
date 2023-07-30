import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveDeleteDateColumnField1690571883165 implements MigrationInterface {
    name = 'RemoveDeleteDateColumnField1690571883165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

}
