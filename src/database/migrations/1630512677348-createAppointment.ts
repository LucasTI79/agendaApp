import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAppointment1630512677348 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await queryRunner.createTable(new Table({
      name: 'appointment',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'date',
          type: 'timestamptz',
          isNullable: false
        },
        {
          name: 'duration',
          type: 'int',
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
