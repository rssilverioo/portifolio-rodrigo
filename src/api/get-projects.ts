import { api } from '../lib/axios'

type Project = {
  id: string
  name: string
  description: string
  image: string
  github: string
  demo: string
  client: string
  link: string
  year: string
}

type GetProjectsResponse = Project[]
export async function getProjects() {
  const response = await api.get<GetProjectsResponse>('/projects')
  return response.data
}
