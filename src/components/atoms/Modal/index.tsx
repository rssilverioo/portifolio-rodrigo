import { Dialog, DialogPanel } from '@headlessui/react'

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
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              Please fill out the form below to get in touch.
            </p>
            {/* Adicione aqui seu formulário ou conteúdo do modal */}
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="mt-4 w-full py-2 bg-gray-700 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}

export default Modal
