import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const aboutMe = await prisma.aboutMe.findFirst({
        include: {
          skills: true,
          experiences: true,
        },
      })
      return res.status(200).json(aboutMe)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao buscar About Me' })
    }
  }

  if (req.method === 'POST') {
    const { bio } = req.body

    try {
      const existingAboutMe = await prisma.aboutMe.findFirst()
      if (existingAboutMe) {
        return res.status(400).json({ error: 'Já existe um perfil About Me.' })
      }

      const newAboutMe = await prisma.aboutMe.create({
        data: {
          bio,
        },
        include: {
          skills: true,
          experiences: true,
        },
      })
      return res.status(201).json(newAboutMe)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao criar About Me' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
