import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  errorFormat: 'pretty',
  log: [
    { emit: 'event', level: 'error' },
    { emit: 'stdout', level: 'error' }
  ]
});

export { prismaClient as prisma };
