import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  birthday!: string;

  @Column()
  phone!: string;

  constructor() {
    if (!this.id) this.id = Math.floor(Math.random() * 100)
  }
}