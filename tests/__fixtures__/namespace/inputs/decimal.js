import { PrismaClient, JsonValue, Decimal } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()

  const a = await prisma.a.findFirst()
  const b = await prisma.b.findFirst({
    where: {
      decFloat: new Decimal('1.23')
    }
  })
  const c = await prisma.c.findFirst()
  const d = await prisma.d.findFirst()
  const e = await prisma.e.findFirst()

}

main()
