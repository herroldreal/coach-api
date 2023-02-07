/* eslint-disable import/no-extraneous-dependencies */
import { PrismaClient, Face, User } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const Prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = Prisma;

export { Prisma, Face, User };
