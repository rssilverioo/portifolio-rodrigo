import { api } from '../lib/axios'

export interface GetSkillssResponse {
  skills: {
    id: string
    name: string
    level: string
    aboutMeId: string
  }[]
}

export async function getSkills() {
  const response = await api.get<GetSkillssResponse>('/aboutme/skills')
  return response.data
}
