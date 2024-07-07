import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors({ origin: process.env.WEBSITE_URL }))
app.use(express.json()) // to parse request body

app.listen(port, () => {
  console.log(`Example app listening on port\nhttp://localhost:${port}`)
})
