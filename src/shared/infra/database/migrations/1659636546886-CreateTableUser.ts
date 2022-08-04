import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUser1659636546886 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "user",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "email",
          type: "varchar",
          isUnique: true
        },
        {
          name: "birthday",
          type: "varchar"
        },
        {
          name: "phone",
          type: "numeric"
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user")
  }

}
