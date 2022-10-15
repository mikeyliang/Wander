import prisma from "./lib/prisma.js"

const trails = await prisma.dm_College.findMany()

console.log(trails)