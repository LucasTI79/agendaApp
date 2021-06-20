import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class relationPatientPlan1623621601857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('patients', new TableColumn({
            name:'plan_id',
            type:'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('patients', new TableForeignKey({
            name: 'PatientUserFK',
            columnNames: ['plan_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'plans',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('patients', 'plan_id');
        await queryRunner.dropForeignKey('patients','PatientUserFK')
    }

}
