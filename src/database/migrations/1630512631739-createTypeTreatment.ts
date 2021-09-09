import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTypeTreatment1630512631739 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(new Table({
      name: 'typetreatment',
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
    await queryRunner.dropTable('clinic')
  }

}
