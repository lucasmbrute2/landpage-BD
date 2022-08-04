import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import dontenvConfigs from "../../configs/dontenvEntries"
import "../infra/container"
import { createConnection } from "../infra/database/data-source"
import { AppError } from "../errors/AppError"
const app = express()

app.use(express.json())
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

app.listen(dontenvConfigs.server.port, () => {
  console.log(`Server is running`);
})