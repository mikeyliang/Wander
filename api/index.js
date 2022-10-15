import express from 'express'
import bodyParser from 'body-parser'
const app = express()
const port = 3000

import prisma from "./lib/prisma.js"

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.get(
    "/trails", async (req, res) => {
        try {
            const trails = await prisma.trail.findMany()
            res.json(trails)
        } catch (error) {
            res.status(500).json({
                message: "Error on retrieving trail data."
            })
        }
    }
)

app.get(
    "/college", async (req, res) => {
        try {
            const college= await prisma.dm_College.findMany()
            res.json(college)
        } catch (error) {
            res.status(500).json({
                message: "Error on retrieving college data."
            })
        }
    }
)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })