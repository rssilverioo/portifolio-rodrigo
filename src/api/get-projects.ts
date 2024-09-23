import { api } from '../lib/axios'

export interface GetProjectsResponse {
  projects: {
    id: string
    name: string
    description: string
    image: string
    client: string
    demo?: string
    github?: string
    link?: string
    year: string
  }[]
}

export async function getProjects() {
  const response = await api.get<GetProjectsResponse>('/projects')
  return response.data
}
