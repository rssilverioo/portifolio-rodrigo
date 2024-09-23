// components/AppLayout.tsx
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { HeaderDashboard } from '../../organisms/HeaderDashboard'
import { List } from 'lucide-react'
// import { Avatar, AvatarImage } from '@/components/ui/avatar'

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return
    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, status, router])

  if (status === 'loading' || !session) {
    return <div>Loading...</div>
  }

  // const userName = session?.user.name || 'Usuário'

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 h-full text-white bg-zinc-900  shadow-lg">
        <HeaderDashboard />
      </aside>
      <main className="flex-1 bg-[#f3f2f2] overlfow-y-auto">
        <header>
          <div className="bg-white h-12 py-7 border-b border-1 fixed w-full top-0 flex items-center justify-between text-zinc-800 transition-all duration-400">
            <div className="flex items-center p-6">
              <button className="p-2 bg-transparent transition-all duration-150 block cursor-pointer outline-none rounded-md hover:bg-gray-primary">
                <List size={24} />
              </button>
              <span className="block border-l border-1 border-[#dee2e6] h-6 mx-4" />
              <div className="uppercase text-sm font-medium">Rodrigo</div>
            </div>
            <div className="flex items-center justify-end p-6 mr-64 text-zinc-900"></div>
          </div>
        </header>
        <div className="flex flex-col min-h-screen ">
          <div className="p-6 mt-20 flex-col flex-1">
            <div className="flex-grow">{children}</div>
          </div>
        </div>
      </main>
    </div>
  )
}
