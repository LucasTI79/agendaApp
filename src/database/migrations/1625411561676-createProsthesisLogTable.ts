import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProsthesisLogTable1625411561676 implements MigrationInterface {
  name = 'createProsthesisLogTable1625411561676'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

      await queryRunner.createTable(new Table({
          name:'prosthesisLog',
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
              isNullable: false,
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
          ]
      }))
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('prosthesisLog')
  }
}
