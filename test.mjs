import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Database connected successfully')
    const adminCount = await prisma.admin.count()
    console.log('Admin count:', adminCount)
  } catch (error) {
    console.error('Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()