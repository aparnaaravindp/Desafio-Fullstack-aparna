import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdminField1690401325062 implements MigrationInterface {
    name = 'CreateAdminField1690401325062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }

}
