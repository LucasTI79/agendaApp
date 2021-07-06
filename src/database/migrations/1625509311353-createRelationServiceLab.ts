import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class createRelationServiceLab1625509311353 implements MigrationInterface {
    name = 'createRelationServiceLab1625509311353'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('services', new TableColumn({
        name:'lab_id',
        type:'uuid',
        isNullable: true
      }));

      await queryRunner.createForeignKey('services', new TableForeignKey({
          name: 'ServiceLabFK',
          columnNames: ['lab_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'labs',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
      }));
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('services', 'lab_id');
      await queryRunner.dropForeignKey('services','ServiceLabFK')
    }

}
