import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1690377272500 implements MigrationInterface {
    name = 'CreateUsersTable1690377272500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullname" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "telephone" integer NOT NULL, "registrationDate" date NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
