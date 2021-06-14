import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createPlanTable1623617015720 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name:'plans',
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
                    type:'varchar',
                    isUnique: true
                },
            ]
        }))
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('plans')
    }
}
