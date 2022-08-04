import dotenv from "dotenv"
dotenv.config()

export default {
  server: {
    port: process.env.PORT ?? 3131
  },
  datanase: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
}