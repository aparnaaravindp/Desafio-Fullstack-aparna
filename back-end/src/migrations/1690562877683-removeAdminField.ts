import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveAdminField1690562877683 implements MigrationInterface {
    name = 'RemoveAdminField1690562877683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

}
