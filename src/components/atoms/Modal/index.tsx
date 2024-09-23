import { Dialog, DialogPanel } from '@headlessui/react'
import { X } from 'lucide-react' // Importando o ícone de fechar
import ContactForm from '../../molecules/ContactForm'

interface IModalProps {
  setContactModalOpen: (isOpen: boolean) => void
  contactModalOpen: boolean
}

const Modal = ({ setContactModalOpen, contactModalOpen }: IModalProps) => {
  return (
    <>
      <Dialog
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <DialogPanel className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-[#0A0A0A] rounded-lg p-6 max-w-sm w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={() => setContactModalOpen(false)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <h2 className="text-lg font-bold mb-4 text-center">Contact Us</h2>
            <ContactForm />
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}

export default Modal
