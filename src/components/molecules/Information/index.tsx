import Image from 'next/image'
import Rodrigo from '../../../../public/rodrigo.jpeg'
import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import { MoveUpRight } from 'lucide-react'
import Modal from '../../atoms/Modal'
import { useState } from 'react'
const Information = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <div>
        <div className="w-full flex p-6  md:flex-row flex-col md:justify-between gap-20	items-center">
          <div className="w-full">
            <Text title="HI, I AM " />
            <Text
              title="RODRIGO SILVERIO"
              subtitle="A Software Engineer based in Brazil who is passionate about developing
        software."
            />
            <div className="mt-10 flex  items-center">
              <div className="flex w-full gap-2">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  icon={<MoveUpRight className="text-zinc-100" />}
                >
                  Contact me
                </Button>

                <a
                  href="https://www.linkedin.com/in/rodrigo-silv%C3%A9rio-7bab55149/"
                  target="_blank"
                  className="ml-4 px-6 py-6 bg-neutral-800 rounded-full items-center justify-center hover:opacity-75 transition-all ease-linear"
                >
                  <Image
                    src={Linkedin}
                    alt="Linkedin Rodrigo Silverio Software Engineer"
                  />
                </a>

                <a
                  href="https://github.com/rssilverioo"
                  target="_blank"
                  className="px-6 py-6 bg-neutral-800 rounded-full items-center justify-center hover:opacity-75 transition-all ease-linear"
                >
                  <Image
                    src={Github}
                    alt="Linkedin Rodrigo Silverio Software Engineer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-[400px] h-[500px] rounded-lg overflow-hidden">
              <Image
                src={Rodrigo}
                alt="Rodrigo Silverio Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <Modal
          contactModalOpen={contactModalOpen}
          setContactModalOpen={setContactModalOpen}
        />
      </div>
    </>
  )
}

export default Information
