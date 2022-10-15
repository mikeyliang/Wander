import prisma from "./lib/prisma.js"

const trails = await prisma.trail.findMany({
    where: {
        collegeid: "ef8f0795-9036-4301-b56f-48995494fcfe"
    },
    include: {
        trailposition: true
    }
})

console.log(trails)