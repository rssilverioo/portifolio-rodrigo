import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '../../atoms/Button'
import emailjs from 'emailjs-com'
import { toast } from 'sonner'

const FormContactSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  message: z.string().min(1, { message: 'Message is required' }),
})
type FormData = z.infer<typeof FormContactSchema>
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  async function handleContactForm(data: FormData) {
    try {
      await emailjs.send(
        'service_bmz887d',
        'template_63php1l',
        {
          to_name: 'Rodrigo',
          from_name: data.name,
          message: data.message,
          email: data.email,
          subject: data.subject,
        },
        'TvNF_w9HNpenXicUa',
      )
      toast.success('Email sent successfully!')
    } catch (error) {
      console.error('Erro ao enviar o email:', error)
      toast.error('Unfortunately we were unable to send the email.!')
    }
  }
  return (
    <>
      <form className="space-y-4 " onClick={handleSubmit(handleContactForm)}>
        <div>
          <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
            Name
          </label>
          <input
            className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none   "
            {...register('name')}
          />
        </div>
        <div>
          <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
            Email
          </label>
          <input
            {...register('email')}
            className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none  "
          />
        </div>
        <div>
          <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
            Subject
          </label>
          <input
            {...register('subject')}
            className="w-full p-2 rounded-md font-manrope border bg-[#1A1A1A] border-zinc-900 focus:outline-none  "
          />
        </div>
        <div>
          <label className="block text-zinc-200 text-sm font-light  font-manrope mb-2">
            Message
          </label>
          <textarea
            {...register('message')}
            className="min-w-[304px] p-2 font-manrope w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600  bg-[#1A1A1A] rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </>
  )
}

export default ContactForm
