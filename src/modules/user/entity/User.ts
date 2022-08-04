import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  birthday!: Date;

  @Column()
  phone!: string;

  constructor() {
    if (!this.id) this.id = uuid()
  }
}