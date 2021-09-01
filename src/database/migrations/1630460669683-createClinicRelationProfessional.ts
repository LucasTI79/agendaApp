import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class createClinicRelationProfessional1630460669683 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('professional', new TableColumn({
      name: 'clinic_id',
      type: 'uuid',
      isNullable: true
    }));

    await queryRunner.createForeignKey('professional', new TableForeignKey({
      name: 'ProfessionalClinicFK',
      columnNames: ['clinic_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'clinic',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('professional', 'clinic_id');
    await queryRunner.dropForeignKey('professional', 'ProfessionalClinicFK')
  }

}
