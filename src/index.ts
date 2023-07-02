import express from 'express'
import cors from 'cors'
import "dotenv/config"
import { router } from "./routes"
const PORT = process.env.PORT || 3001
import db from "./config/mongo"

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
db().then(() => console.log("Conexion Ready"))

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))



