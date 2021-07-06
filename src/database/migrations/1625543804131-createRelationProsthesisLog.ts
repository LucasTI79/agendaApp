import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class createRelationProsthesisLog1625543804131 implements MigrationInterface {
  name = 'createRelationProsthesisLog1625543804131'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('prosthesisLog', [
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
    ]);

    await queryRunner.createForeignKeys('prosthesisLog', [
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
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('prosthesisLog', 'patient_id');
    await queryRunner.dropColumn('prosthesisLog', 'professional_id');
    await queryRunner.dropColumn('prosthesisLog', 'service_id');
    await queryRunner.dropColumn('prosthesisLog', 'lab_id');
    await queryRunner.dropColumn('prosthesisLog', 'status_id');

    await queryRunner.dropForeignKey('prosthesisLog','ProsthesisPatientFK')
    await queryRunner.dropForeignKey('prosthesisLog','ProsthesisProfessionalFK')
    await queryRunner.dropForeignKey('prosthesisLog','ProsthesisServiceFK')
    await queryRunner.dropForeignKey('prosthesisLog','ProsthesisLabFK')
    await queryRunner.dropForeignKey('prosthesisLog','ProsthesisStatusFK')
  }
}
