import Container from '../../atoms/Container'
import ExperienceCard from '../../atoms/ExperienceCard'
import Text from '../../atoms/Text'
const Experience = () => {
  return (
    <>
      <div className="border-b border-zinc-800 border-opacity-70 p-6 py-20">
        <Container>
          <div className="flex justify-between  flex-col md:flex-row w-full">
            <div className="w-full">
              <Text title="My Experience" />
            </div>
            <div className="flex flex-col gap-8">
              <ExperienceCard
                title="Freelancer Developer"
                startDate="nov 2023"
                finalDate="preset"
                description="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in teste in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Experience
