import "reflect-metadata"
import express from "express"
import dontenvConfigs from "../../configs/dontenvEntries"
const app = express()

app.use(express.json())

app.listen(dontenvConfigs.server.port, () => {
  console.log(`Server is running`);
})