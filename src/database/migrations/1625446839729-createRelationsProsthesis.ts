import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class createRelationsProsthesis1625446839729 implements MigrationInterface {
    name = 'createRelationsProsthesis1625446839729'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumns('prosthesis', [
        new TableColumn({
          name:'patient_id',
          type:'uuid',
          isNullable: true
        }),
        new TableColumn({
          name:'professional_id',
          type:'uuid',
          isNullable: true
        }),
        new TableColumn({
          name:'service_id',
          type:'uuid',
          isNullable: true
        }),
        new TableColumn({
          name:'lab_id',
          type:'uuid',
          isNullable: true
        }),
        new TableColumn({
          name:'status_id',
          type:'uuid',
          isNullable: true
        }),
      ]
    );

    await queryRunner.createForeignKeys('prosthesis', [
        new TableForeignKey({
          name: 'ProsthesisPatientFK',
          columnNames: ['patient_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'patients',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }),
        new TableForeignKey({
          name: 'ProsthesisProfessionalFK',
          columnNames: ['professional_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'professional',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }),
        new TableForeignKey({
          name: 'ProsthesisServiceFK',
          columnNames: ['service_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'services',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }),
        new TableForeignKey({
          name: 'ProsthesisLabFK',
          columnNames: ['lab_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'labs',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }),
        new TableForeignKey({
          name: 'ProsthesisStatusFK',
          columnNames: ['status_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'statusProsthesis',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }),
      ]
     )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('prosthesis', 'patient_id');
      await queryRunner.dropColumn('prosthesis', 'professional_id');
      await queryRunner.dropColumn('prosthesis', 'service_id');
      await queryRunner.dropColumn('prosthesis', 'lab_id');
      await queryRunner.dropColumn('prosthesis', 'status_id');

      await queryRunner.dropForeignKey('prosthesis','ProsthesisPatientFK')
      await queryRunner.dropForeignKey('prosthesis','ProsthesisProfessionalFK')
      await queryRunner.dropForeignKey('prosthesis','ProsthesisServiceFK')
      await queryRunner.dropForeignKey('prosthesis','ProsthesisLabFK')
      await queryRunner.dropForeignKey('prosthesis','ProsthesisStatusFK')
    }

}
