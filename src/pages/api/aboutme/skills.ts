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
        include: { skills: true },
      })
      if (!aboutMe) {
        return res.status(404).json({ error: 'About Me não encontrado.' })
      }
      return res.status(200).json(aboutMe.skills)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao buscar Skills' })
    }
  }

  if (req.method === 'POST') {
    const { name, level } = req.body

    try {
      const aboutMe = await prisma.aboutMe.findFirst()
      if (!aboutMe) {
        return res.status(404).json({ error: 'About Me não encontrado.' })
      }

      const newSkill = await prisma.skill.create({
        data: {
          name,
          level,
          aboutMeId: aboutMe.id,
        },
      })
      return res.status(201).json(newSkill)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Erro ao criar Skill' })
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
