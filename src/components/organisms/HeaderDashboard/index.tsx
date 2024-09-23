import { Home } from 'lucide-react'
import { NavLink } from '../../atoms/Navlink'

export function HeaderDashboard() {
  return (
    <div className="flex fixed h-screen">
      <div className="h-full p-5 pt-8 relative duration-300">
        <div className=" font-manrope flex gap-x-4 w-full jusitfy-center items-center">
          Rodrigo Silverio
        </div>
        <div className="font-manrope pt-6 gap-6 flex flex-col">
          <NavLink href="/dashboard">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink href="/dashboard/settings">
            <Home className="h-4 w-4" />
            Projetos
          </NavLink>
        </div>
      </div>
    </div>
  )
}
