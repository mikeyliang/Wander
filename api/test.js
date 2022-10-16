import prisma from "./lib/prisma.js"

const user = await prisma.user.findUnique({
    where: {
        email: 'ml2226@cornell.edu'
    }
})

console.log(user)