import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import dontenvConfigs from "../../configs/dontenvEntries"
import { createConnection } from "../infra/database/data-source"
import "../infra/container"
import { router } from "./routes/user.routes"
import { AppError } from "../errors/AppError"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

createConnection()

app.listen(dontenvConfigs.server.port || 3232, () => {
  console.log(`Server is running`);
})