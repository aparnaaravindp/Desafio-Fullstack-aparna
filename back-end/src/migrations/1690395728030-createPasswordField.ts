import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePasswordField1690395728030 implements MigrationInterface {
    name = 'CreatePasswordField1690395728030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
