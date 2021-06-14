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
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'phone',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'birthday',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'gender',
                    type: 'character'
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('patients')
    }

}
