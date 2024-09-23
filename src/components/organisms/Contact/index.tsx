/* eslint-disable react/no-unescaped-entities */
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Image from 'next/image'

import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'
import Button from '../../atoms/Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const FormContactSchema = z.object({
  name: z.string().min(3, { message: 'Precisa ter pelo menos 3 letras' }),
  email: z.string().email('This is not a valid email.'),
  subject: z.string().min(3, { message: 'Precisa ter pelo menos 3 letras' }),
  message: z.string().min(1, 'A mensagem não pode estar vazia'),
})

type FormData = z.infer<typeof FormContactSchema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormContactSchema),
  })

  async function handleContactForm(data: FormData) {
    console.log(data)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
      <div className="md:pb-20 p-6 py-20" id="contact">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col  w-full">
              <div className="flex flex-col w-full">
                <Text title="Let's Connect" />
                <p className="text-zinc-200 font-light font-manrope text-base">
                  Say hello at{' '}
                  <span className="underline underline-offset-8 decoration-[#D3E97A]">
                    rodrigo.s.silverio@outlook.com
                  </span>
                </p>
                <p className="text-zinc-200 mt-2 font-light font-manrope text-base">
                  For more info, here's my{' '}
                  <button
                    onClick={handleDownload}
                    className="underline underline-offset-8 decoration-[#D3E97A]"
                  >
                    resume
                  </button>
                </p>
                <div className="mt-4 md:mt-10  mb-4 flex gap-2 w-full ">
                  <Image src={Linkedin} alt="Linkedin Rodrigo Silverio" />
                  <Image src={Github} alt="Linkedin Rodrigo Silverio" />
                </div>
                <div className="hidden md:flex mt-[280px] font-manrope">
                  &copy; Rodrigo Silverio
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-lg">
              <form
                className="space-y-4"
                onClick={handleSubmit(handleContactForm)}
              >
                <div>
                  <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
                    Name
                  </label>
                  <input
                    className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none   "
                    {...register('name')}
                  />
                  {errors && errors.name && (
                    <p className="text-sm text-red-400 font-manrope">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none  "
                  />
                  {errors && errors.email && (
                    <p className="text-sm text-red-400 font-manrope">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none  "
                  />
                  {errors && errors.subject && (
                    <p className="text-sm text-red-400 font-manrope">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
                    Name
                  </label>
                  <textarea
                    {...register('message')}
                    className="min-w-[304px] p-2 font-manrope w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600  bg-[#1A1A1A] rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                  />
                  {errors && errors.message && (
                    <p className="text-sm text-red-400 font-manrope">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button>Submit</Button>
              </form>
              <div className="md:hidden flex mt-10 font-manrope">
                &copy; Rodrigo Silverio
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Contact
