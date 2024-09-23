// // import {
// //   DialogContent,
// //   DialogDescription,
// //   DialogFooter,
// //   DialogHeader,
// //   DialogTitle,
// // } from '@/components/ui/dialog'
// import { registerProject } from '@/src/api/post-project'
// import Button from '@/src/components/atoms/Button'
// import { useMutation } from '@tanstack/react-query'
// import { useForm } from 'react-hook-form'
// import { toast } from 'sonner'
// import { z } from 'zod'

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const FormContactSchema = z.object({
//   name: z.string().nonempty('O nome do projeto é obrigatório.'),
//   description: z.string().nonempty('A descrição é obrigatória.'),
//   image: z.string().nonempty('A imagem é obrigatória.'),
//   demo: z.string().optional(),
//   github: z.string().optional(),
//   link: z.string().optional(),
//   client: z.string().nonempty('O cliente é obrigatório.'),
//   year: z.string().nonempty('O ano é obrigatório.'),
// })
// type FormData = z.infer<typeof FormContactSchema>

// const ModalCreateProject = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm<FormData>()
//   const { mutateAsync: registerProjectFn } = useMutation({
//     mutationFn: registerProject,
//   })

//   async function handleContactForm(data: FormData) {
//     console.log(data)
//     try {
//       console.log(data)
//       await registerProjectFn({
//         name: data.name,
//         description: data.description,
//         image: data.image,
//       })
//       toast.success('Projeto cadastrado com sucesso!', {})
//     } catch {
//       toast.error('Erro ao cadastrar Projeto.')
//     }
//   }
//   return (
//     <>
//       {/* <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Create a project</DialogTitle>
//           <DialogDescription>
//             Create a project with the specified name and description
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit(handleContactForm)} className="space-y-4">
//           <div>
//             <label className="block text-zinc-200 mb-2">Nome do Projeto</label>
//             <input
//               className="w-full p-2 rounded-md border bg-[#1A1A1A]"
//               {...register('name')}
//             />
//             {errors.name && (
//               <p className="text-red-400">{errors.name.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-zinc-200 mb-2">Descrição</label>
//             <textarea
//               className="w-full p-2 rounded-md border bg-[#1A1A1A]"
//               {...register('description')}
//             />
//             {errors.description && (
//               <p className="text-red-400">{errors.description.message}</p>
//             )}
//           </div>

//           <div className="flex space-x-4">
//             <div className="flex-1">
//               <label className="block text-zinc-200 mb-2">Github</label>
//               <input
//                 className="w-full p-2 rounded-md border bg-[#1A1A1A]"
//                 {...register('github')}
//               />
//               {errors.github && (
//                 <p className="text-red-400">{errors.github.message}</p>
//               )}
//             </div>
//             <div className="flex-1">
//               <label className="block text-zinc-200 mb-2">Demo</label>
//               <input
//                 className="w-full p-2 rounded-md border bg-[#1A1A1A]"
//                 {...register('demo')}
//               />
//               {errors.demo && (
//                 <p className="text-red-400">{errors.demo.message}</p>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="block text-zinc-200 mb-2">Imagem (link)</label>
//             <input
//               className="w-full p-2 rounded-md border bg-[#1A1A1A]"
//               {...register('image')}
//             />
//             {errors.image && (
//               <p className="text-red-400">{errors.image.message}</p>
//             )}
//           </div>
//         </form>
//         <DialogFooter>
//           <Button type="submit">Enviar</Button>
//           <Button>Cancelar</Button>
//         </DialogFooter>
//       </DialogContent> */}
//     </>
//   )
// }

// export default ModalCreateProject
