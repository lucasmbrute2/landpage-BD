import dotenv from "dotenv"
dotenv.config()

export default {
  server: {
    port: process.env.PORT
  },
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.PORT_DB
  }
}