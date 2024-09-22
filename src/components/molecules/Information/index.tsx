import Image from 'next/image'
import Rodrigo from '../../../../public/rodrigo.jpeg'
import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import { MoveUpRight } from 'lucide-react'
const Information = () => {
  return (
    <>
      <div>
        <div className="w-full flex p-6  md:flex-row flex-col md:justify-between gap-20	items-center">
          <div className="w-full">
            <Text title="HI, I AM " />
            <Text
              title="RODRIGO SILVERIO"
              subtitle="A front-end developer based in Brazil who is passionate about developing
        software."
            />
            <div className="mt-10 flex  items-center">
              <div className="flex w-full gap-2">
                <Button icon={<MoveUpRight className="text-zinc-100" />}>
                  Contact me
                </Button>

                <button className="ml-4 px-6 py-6 bg-neutral-800 rounded-full items-center justify-center hover:opacity-75 transition-all ease-linear">
                  <Image
                    src={Linkedin}
                    alt="Linkedin Rodrigo Silverio Software Engineer"
                  />
                </button>

                <button className="px-6 py-6 bg-neutral-800 rounded-full items-center justify-center hover:opacity-75 transition-all ease-linear">
                  <Image
                    src={Github}
                    alt="Linkedin Rodrigo Silverio Software Engineer"
                  />
                </button>
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
      </div>
    </>
  )
}

export default Information
