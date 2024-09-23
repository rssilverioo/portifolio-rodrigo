// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        })

        if (
          user &&
          (await bcrypt.compare(credentials?.password || '', user.password))
        ) {
          return {
            id: user.id.toString(), // Certifique-se de que o ID é uma string
            name: user.name,
            email: user.email,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 horas em segundos
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id // Adiciona o ID do usuário ao token
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string // Garantir que token.id é uma string
      }
      return session
    },
  },
})
