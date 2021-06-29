import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createPatientTable1623595984826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name:'patients',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'RG',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'CPF',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'birthday',
                    type: 'timestamptz',
                    isNullable: true
                },
                {
                    name: 'gender',
                    type: 'character',
                    isNullable: true
                },
                {
                  name: 'createdAt',
                  type: 'timestamptz',
                  default: 'now()',
                  isNullable: true
                },
                {
                  name: 'updatedAt',
                  type: 'timestamptz',
                  default: 'now()',
                  isNullable: true
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('patients')
    }

}
