/* eslint-disable react/no-unescaped-entities */
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Image from 'next/image'
import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'

import ContactForm from '../../molecules/ContactForm'

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <>
      <div className="md:pb-20 p-6 py-20" id="contact">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between ">
            <div className="flex flex-col  w-full">
              <div className="flex flex-col w-full">
                <Text title="Let's Connect" />
                <p className="text-zinc-200 font-light font-manrope text-base">
                  Say hello at{' '}
                  <span className="underline underline-offset-8 decoration-[#D3E97A]">
                    rodrigo.s.silverio@outlook.com
                  </span>
                </p>
                <p className="text-zinc-200 mt-2 font-light font-manrope text-base">
                  For more info, here's my{' '}
                  <button
                    onClick={handleDownload}
                    className="underline underline-offset-8 decoration-[#D3E97A]"
                  >
                    resume
                  </button>
                </p>
                <div className="mt-4 md:mt-10  mb-4 flex gap-2 w-full ">
                  <Image src={Linkedin} alt="Linkedin Rodrigo Silverio" />
                  <Image src={Github} alt="Linkedin Rodrigo Silverio" />
                </div>
                <div className="hidden md:flex mt-[280px] font-manrope">
                  &copy; Rodrigo Silverio
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-lg">
              <ContactForm />
              <div className="md:hidden flex mt-10 font-manrope">
                &copy; Rodrigo Silverio
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Contact
