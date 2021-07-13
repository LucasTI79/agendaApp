import {MigrationInterface, QueryRunner, getRepository } from "typeorm";
import Professional from "../../app/models/Professional";
import { ProfessionalSeed } from "../seeds/Professional.seed";

export class createSeedProfessional1626147005195 implements MigrationInterface {
    name = 'createSeedProfessional1626147005195'

    public async up(queryRunner: QueryRunner): Promise<void> {
      const professionals = getRepository(Professional);
      ProfessionalSeed.map(async item => await professionals.save(item))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.clearTable('professional')
    }
}
