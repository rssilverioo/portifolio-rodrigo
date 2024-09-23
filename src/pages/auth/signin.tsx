import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormContactSchema = z.object({
  email: z.string().email('This is not a valid email.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
})
type FormData = z.infer<typeof FormContactSchema>
const SignIn = () => {
  const router = useRouter()
  const [loginError, setLoginError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormContactSchema),
  })

  const handleLogin = async (data: FormData) => {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (result?.error) {
      setLoginError(result.error) // Define a mensagem de erro
    } else {
      setLoginError(null) // Limpa qualquer erro anterior
      router.push('/dashboard')
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-[#1A1A1A] p-6 rounded-md shadow-md w-96 gap-8 flex flex-col"
      >
        {loginError && (
          <p className="text-sm text-red-400 font-manrope mb-2">
            Usuario ou senha incorretos
          </p>
        )}
        <div>
          <label className="block text-zinc-200 text-sm font-light font-manrope mb-2">
            Email
          </label>
          <input
            className="w-full p-2 rounded-md font-manrope  bg-[#0A0A0A]   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-red-400 font-manrope">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-zinc-200 text-sm font-light font-manrope mb-2">
            Senha
          </label>
          <input
            className="w-full p-2 rounded-md font-manrope  bg-[#0A0A0A]   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            type="password"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-sm text-red-400 font-manrope">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:opacity-75 transition-all ease-linear text-white p-2 rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default SignIn
