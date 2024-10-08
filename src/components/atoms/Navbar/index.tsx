import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Modal from '../Modal'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const router = useRouter()

  function handlePushAbout() {
    router.push('/about')
  }

  const handleWorkClick = () => {
    if (router.pathname !== '/') {
      router.push('/#projects')
    } else {
      const element = document.getElementById('projects')
      if (element) {
        // Verifique se o elemento não é null
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
      }
    }
  }
  return (
    <>
      <nav aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-zinc-100" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={handleWorkClick}
            className="text font-light  font-inter text-zinc-100 hover:opacity-75 transition-all ease-linear"
          >
            Work
          </button>
          <button
            onClick={handlePushAbout}
            className="text font-light  font-inter text-zinc-100 hover:opacity-75 transition-all ease-linea"
          >
            About
          </button>
          <button
            onClick={() => setContactModalOpen(true)}
            className="text font-light font-inter text-zinc-100 hover:opacity-75 transition-all ease-linear"
          >
            Contact
          </button>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 text-gray-900 sm:hidden">
              <span className="uppercase">Rodrigo Silverio</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button
                  onClick={handleWorkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Work
                </button>
                <button
                  onClick={handlePushAbout}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <Modal
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
      />
    </>
  )
}

export default Navbar
