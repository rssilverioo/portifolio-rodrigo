// pages/api/createUser.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: 'Email, senha e nome são obrigatórios.' })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })
    if (existingUser) {
      return res.status(409).json({ message: 'Email já está em uso.' })
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
        },
      })

      return res.status(201).json(user)
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      return res.status(500).json({ message: 'Erro ao criar usuário.' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Método ${req.method} não permitido.`)
  }
}
