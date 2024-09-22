import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Linkedin from '../../../../public/svg/linkedin.svg'
import Github from '../../../../public/svg/github.svg'
import Image from 'next/image'
import { Download } from 'lucide-react'
import AboutMeSkills from '../../molecules/AboutMeSkills'

interface AboutMeProps {
  aboutme?: boolean
}

const AboutMeComponent = ({ aboutme }: AboutMeProps) => {
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
                I am a front-end developer based in Sydney. Has Mechanical
                Engineering background.{' '}
              </h1>
              <span className="font-light text-base font-manrope">
                I am a front-end developer based in Sydney looking for exciting
                opportunities. Has Mechanical Engineering background. Likes to
                focus on accessibility when developing. Passionate and curious
                about solving problems. Currently, I’m exploring Reactjs,
                Webflow and a bit of Designing. While I am not programming, I
                enjoy playing football, photography and playing Valorant.
                Learning more to improve skill.
              </span>
              <div className="mt-10">
                {!aboutme && (
                  <button className="text-[#D3E97A] hover:text-opacity-40  flex  gap-2 items-center font-manrope font-medium uppercase transition-all ease-linear underline underline-offset-8 ">
                    More about me
                  </button>
                )}
                {aboutme && (
                  <>
                    <div className="mt-10 flex  items-center">
                      <div className="flex w-full gap-2">
                        <Button
                          icon={<Download className="text-zinc-100" />}
                          onClick={() => console.log('Download')}
                        >
                          download my resume
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
