'use client'

import { useRouter } from 'next/router'
import Navbar from '../../atoms/Navbar'

export default function Menu() {
  const router = useRouter()
  function handleBack() {
    router.push('/')
  }
  return (
    <header className="flex items-center shadow-md justify-between p-6 lg:px-8">
      <div className="flex lg:flex-1">
        <button onClick={handleBack} className="-m-1.5 p-1.5">
          <span className="uppercase text-zinc-200 text-2xl	">
            Rodrigo Silverio
          </span>
        </button>
      </div>
      <Navbar />
    </header>
  )
}
