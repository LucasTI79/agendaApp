import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProsthesisTable1625411548229 implements MigrationInterface {
    name = 'createProsthesisTable1625411548229'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(new Table({
            name:'prosthesis',
            columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()'
                },
                {
                  name: 'isbn',
                  type:'varchar',
                  isNullable: false,
                },
                {
                  name: 'region',
                  type:'varchar',
                  isNullable: true,
                },
                {
                  name: 'box',
                  type:'int',
                  isNullable: true,
                },
                {
                  name: 'DeliveryDate',
                  type: 'timestamptz',
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
      await queryRunner.dropTable('prosthesis')
    }

}
