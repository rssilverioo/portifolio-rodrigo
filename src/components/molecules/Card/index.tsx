import { MoveUpRight } from 'lucide-react'
import Work from '../../../../public/work.png'
import Image from 'next/image'
import Github from '../../../../public/svg/github.svg'

const Card = () => {
  return (
    <>
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-3 md:gap-12 w-full">
        <div className="w-full bg-[#1A1A1A] flex p-2 flex-col">
          <div>
            <span className="bg-black/80 hover:opacity-50 transition-all cursor-pointer ease-linear font-manrope font-light text-sm px-5 py-1 rounded-full ">
              {' '}
              Conceputal work
            </span>
          </div>
          <div className="py-20 px-14 flex justify-center">
            <div className=" w-full max-w-[486px] max-h-[347px] rounded-xl overflow-hidden bg-black  flex items-center justify-center hover:opacity-55 transition-all ease-linear">
              <Image
                src={Work}
                alt=""
                className=" w-full object-cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-3 md:py-16 flex flex-col gap-4">
          <h1 className="font-manrope text-3xl font-medium">
            Promotional landing page for our favorite show
          </h1>
          <span
            className="font-manrope text-base font-light leading-relaxed
 "
          >
            Teamed up with a designer to breathe life into a promotional webpage
            for our beloved show, Adventure Time. Delivered a fully responsive
            design with dynamic content capabilities, seamlessly integrating a
            newsletter feature to keep fans updated with the latest adventures.
          </span>
          <div className="pt-4">
            <h1 className="mb-4 pb-4 border-b border-1 border-zinc-700 font-manrope uppercase font-medium">
              Project Info
            </h1>
            <div className="flex gap-4 w-full flex-col">
              <div className="flex justify-between border-b border-zinc-700 border-1">
                <p className="pb-4  font-manrope  font-medium">Client</p>
                <p className="pb-4  font-manrope  font-medium">Brasil</p>
              </div>
              <div className="flex justify-between border-b border-zinc-700 border-1">
                <p className="pb-4  font-manrope  font-medium">Year</p>
                <p className="pb-4  font-manrope  font-medium">2024</p>
              </div>
              <div className="flex justify-between border-b border-zinc-700 border-1">
                <p className="pb-4  font-manrope  font-medium">Role</p>
                <p className="pb-4  font-manrope  font-medium">
                  Front-end Developer
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4 pt-12">
            <button className="text-[#D3E97A] hover:text-opacity-40  flex  gap-2 items-center font-manrope font-medium uppercase transition-all ease-linear underline underline-offset-8 ">
              Visit the website
              <MoveUpRight />
            </button>
            <button className="text-[#D3E97A] flex hover:text-opacity-40  gap-2 items-center font-manrope font-medium uppercase transition-all ease-linear underline underline-offset-8 ">
              See on github
              <Image src={Github} alt="Github Rodrigo Silverio" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
