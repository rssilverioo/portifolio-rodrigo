// import { AppLayout } from '@/src/components/layout/dashboard'
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { getProjects } from '@/src/api/get-projects'
// import { ProjectTableRow } from './projects-table-row'
// import { useQuery } from '@tanstack/react-query'
// import ModalCreateProject from './modal'
// import { Dialog, DialogTrigger } from '@/components/ui/dialog'

const Settings = () => {
  // const {
  //   data: result,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ['projects'],
  //   queryFn: getProjects,
  // })

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  // if (isError) {
  //   return <p>Erro ao carregar projetos.</p>
  // }

  // console.log(result)

  return (
    <>
      <h1>teste</h1>
    </>
    // <AppLayout>
    //   <div className="flex flex-col gap-4 font-manrope">
    //     <h1 className="text-3xl font-bold tracking-tight">Projetos</h1>
    //     <Dialog>
    //       <DialogTrigger>Open</DialogTrigger>
    //       <ModalCreateProject />
    //     </Dialog>

    //     <div className="space-y-2.5">
    //       <div className="rounded-md border border-zinc-700">
    //         {/* <Table>
    //           <TableHeader>
    //             <TableRow>
    //               <TableHead className="w-[64px]"></TableHead>
    //               <TableHead className="w-[140px]">ID</TableHead>
    //               <TableHead className="w-[140px]">Nome</TableHead>
    //               <TableHead>Descrição</TableHead>
    //               <TableHead className="w-[140px]">Imagem</TableHead>
    //               <TableHead className="w-[140px]">Github</TableHead>
    //               <TableHead className="w-[140px]">Link</TableHead>
    //               <TableHead className="w-[140px]">Demo</TableHead>
    //             </TableRow>
    //           </TableHeader>
    //           <TableBody> */}
    //             {Array.isArray(result) &&
    //               result.map((project) => (
    //                 <ProjectTableRow
    //                   key={project.id} // Use "id" aqui
    //                   project={project}
    //                 />
    //               ))}
    //             {!Array.isArray(result) && (
    //               <tr>
    //                 <td colSpan={8}>Nenhum projeto encontrado.</td>
    //               </tr>
    //             )}
    //           </TableBody>
    //         </Table>
    //       </div>
    //     </div>
    //   </div>
    // </AppLayout>
  )
}

export default Settings
