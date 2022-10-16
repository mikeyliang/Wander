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

app.get('/user', async (req, res) => {
    try {
        const trails = await prisma.user.findUnique({
            where: {
                email: req.query.email
            },
            include: {
                challenges: true
            }
        })
        res.json(trails)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }

})

app.post('/user/register', async (req, res) => {
        
    const data = JSON.stringify(req.body)
    console.log(data)
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            collegeid: data.collegeid
        }
    })
    res.send(req.body)
    }
    

)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


