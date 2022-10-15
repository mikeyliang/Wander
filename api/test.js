import prisma from "./lib/prisma.js"

const trails = await prisma.trail.findMany()

console.log(trails)