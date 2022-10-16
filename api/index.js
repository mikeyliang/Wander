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
    "/trail", async (req, res) => {

        if (req.query.collegeid) {
            try {
                const trails = await prisma.trail.findMany({
                    where: {
                        collegeid: req.query.collegeid
                    },
                    include: {
                        trailposition: true
                    }
                })
                res.json(trails)
            } catch (error) {
                res.status(500).json({
                    message: error
                })
            }
        } else if (req.query.trailid) {
            try {
                const trails = await prisma.trail.findUnique({
                    where: {
                        id: req.query.trailid
                    },
                    include: {
                        trailposition: true,
                    }
                })
                
               
                res.json(trails)
            } catch (error) {
                res.status(500).json({
                    message: "Error on retrieving unique trail data."
                })
            }

        }

    })


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

app.post('/user', async (req, res) => {
    if (req.body) {
        try {
            const user = await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    collegeid: req.body.collegeid
                }
            })
            res.json.user
        } catch (error) {
            req.status(500).json({
                message: "Error on creating user data."
            })
        }
    }
}
)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


