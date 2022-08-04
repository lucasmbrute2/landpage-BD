import "reflect-metadata"
import express from "express"
import dontenvConfigs from "../../configs/dontenvEntries"
import { createConnection } from "../infra/database/data-source"
const app = express()

app.use(express.json())
createConnection()

app.listen(dontenvConfigs.server.port, () => {
  console.log(`Server is running`);
})