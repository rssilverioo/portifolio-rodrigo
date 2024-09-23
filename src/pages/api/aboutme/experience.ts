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
        include: { experiences: true },
      })
      if (!aboutMe) {
        return res.status(404).json({ error: 'About Me não encontrado.' })
      }
      return res.status(200).json(aboutMe.experiences)
    } catch (error) {
      console.error('Erro ao buscar experiências:', error)
      return res.status(500).json({ error: 'Erro ao buscar experiência' })
    }
  }

  if (req.method === 'POST') {
    const { company, position, startDate, endDate, description } = req.body

    if (!company || !position || !startDate) {
      return res.status(400).json({
        error:
          'Dados inválidos. Por favor, forneça empresa, posição e data de início.',
      })
    }

    try {
      const aboutMe = await prisma.aboutMe.findFirst()
      if (!aboutMe) {
        return res.status(404).json({ error: 'About Me não encontrado.' })
      }

      const newExperience = await prisma.experience.create({
        data: {
          company,
          position,
          description,
          startDate,
          endDate,
          aboutMeId: aboutMe.id,
        },
      })
      return res.status(201).json(newExperience)
    } catch (error) {
      console.error('Erro ao criar experiência:', error)
      return res.status(500).json({ error: 'Erro ao criar experience' })
    }
  }

  // Define os métodos permitidos
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
