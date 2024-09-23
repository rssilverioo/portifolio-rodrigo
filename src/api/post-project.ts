import { api } from '../lib/axios'

export interface RegisterProjectBody {
  name: string
  description: string
  image: string
}
export async function registerProject({
  name,
  description,
  image,
}: RegisterProjectBody) {
  await api.post('/projects', {
    name,
    description,
    image,
  })
}
