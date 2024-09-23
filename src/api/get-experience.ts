import { api } from '../lib/axios'

type Experience = {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
  id: string
}

type GetExperiencesResponse = Experience[]
export async function getExperience() {
  const response = await api.get<GetExperiencesResponse>('/aboutme/experience')
  return response.data
}
