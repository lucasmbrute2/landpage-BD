import { v4 as uuid } from "uuid"

export class User {
  id?: string;
  nome!: string;
  email!: string;
  nascimento!: Date;
  telefone!: string;

  constructor() {
    if (!this.id) this.id = uuid()
  }
}