import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, description, image, client, demo, github, link, year } =
      req.body

    if (!name || !description || !image) {
      return res
        .status(400)
        .json({ message: 'Nome, descrição e imagem são obrigatórios.' })
    }

    try {
      const project = await prisma.project.create({
        data: {
          name,
          description,
          image,
          client,
          demo,
          github,
          link,
          year,
        },
      })

      return res.status(201).json(project)
    } catch (error) {
      console.error('Erro ao criar projeto:', error)
      return res.status(500).json({ message: 'Erro ao criar projeto.' })
    }
  }

  if (req.method === 'GET') {
    try {
      const projects = await prisma.project.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })
      return res.status(200).json(projects)
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
      return res.status(500).json({ message: 'Erro ao buscar projetos.' })
    }
  }

  res.setHeader('Allow', ['POST', 'GET'])
  res.status(405).end(`Método ${req.method} não permitido.`)
}
