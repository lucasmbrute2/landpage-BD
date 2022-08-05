import { DataSource } from "typeorm";
import dotenv from "../../../configs/dontenvEntries"
import { User } from "../../../modules/user/entity/User";
import { migrations } from "./migrations";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dotenv.database.host,
  port: Number(dotenv.database.port),
  username: dotenv.database.username,
  password: dotenv.database.password,
  database: dotenv.database.database,
  entities: [User],
  migrations,
  logging: true,
  synchronize: true,
  subscribers: []
})

export async function createConnection(): Promise<void> {
  try {
    await AppDataSource.initialize()
    console.log("DB Connnected")
  } catch (error) {
    console.log(`Fail to connect DB - Error: ${error}`)
  }
}