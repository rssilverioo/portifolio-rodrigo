/* eslint-disable react/no-unescaped-entities */
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'
import Image from 'next/image'
import { Download } from 'lucide-react'
import AboutMeSkills from '../../molecules/AboutMeSkills'
import { useRouter } from 'next/router'

interface AboutMeProps {
  aboutme?: boolean
}

const AboutMeComponent = ({ aboutme }: AboutMeProps) => {
  const router = useRouter()

  function handlePushAboutMePage() {
    router.push('/about')
  }

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
      <div className="border-b border-zinc-800 border-opacity-70 p-6 py-20">
        <Container>
          <div className="flex justify-between  flex-col md:flex-row w-full">
            <div className="w-full">
              <Text title="About me" />
            </div>
            <div className="w-full gap-2 flex flex-col">
              <h1 className="font-manrope text-2xl font-medium">
                I am a front-end developer based in Brazil.{' '}
              </h1>
              <span className="font-light text-base font-manrope">
                I'm a front-end developer based in Brazil looking for
                interesting opportunities. I have a background in Systems
                Analysis and Development. I like to focus on accessibility when
                developing. I'm passionate and curious about solving problems.
                I'm currently exploring NextJs. When I'm not coding, I like to
                play soccer, watch TV series and movies. Learn more to improve
                your skills.
              </span>
              <div className="mt-10">
                {!aboutme && (
                  <button
                    onClick={handlePushAboutMePage}
                    className="text-[#D3E97A] hover:text-opacity-40  flex  gap-2 items-center font-manrope font-medium uppercase transition-all ease-linear underline underline-offset-8 "
                  >
                    More about me
                  </button>
                )}
                {aboutme && (
                  <>
                    <div className="mt-10 flex  items-center">
                      <div className="flex w-full gap-2">
                        <Button
                          icon={<Download className="text-zinc-100" />}
                          onClick={handleDownload}
                        >
                          download my resume
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
                  </>
                )}
              </div>
            </div>
          </div>
          {aboutme && (
            <div className="pt-20">
              <AboutMeSkills />
            </div>
          )}
        </Container>
      </div>
    </>
  )
}

export default AboutMeComponent
