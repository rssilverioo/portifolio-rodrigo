import { api } from '../lib/axios'

type Skills = {
  id: string
  name: string
  level: string
  aboutMeId: string
}

type GetSkillssResponse = Skills[]
export async function getSkills() {
  const response = await api.get<GetSkillssResponse>('/aboutme/skills')
  return response.data
}
