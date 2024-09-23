import { api } from '../lib/axios'

export interface GetExperiencesResponse {
  experiences: {
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
    id: string
  }[]
}

export async function getExperience() {
  const response = await api.get<GetExperiencesResponse>('/aboutme/experience')
  return response.data
}
