import { DataSource } from "typeorm";
import dotenv from "../../../configs/dontenvEntries"
import { User } from "../../../modules/user/entity/User";
import { migrations } from "./migrations";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: dotenv.database.url,
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