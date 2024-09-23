import { getExperience } from '@/src/api/get-experience'
import Container from '../../atoms/Container'
import ExperienceCard from '../../atoms/ExperienceCard'
import Text from '../../atoms/Text'
import { useQuery } from '@tanstack/react-query'
const Experience = () => {
  const { data: result } = useQuery({
    queryKey: ['experience'],
    queryFn: getExperience,
  })
  return (
    <>
      <div className="border-b border-zinc-800 border-opacity-70 p-6 py-20">
        <Container>
          <div className="flex justify-between  flex-col md:flex-row w-full">
            <div className="w-full">
              <Text title="My Experience" />
            </div>
            <div className="flex flex-col gap-8">
              {result &&
                result.experiences.map((experience) => {
                  return (
                    <ExperienceCard
                      key={experience.id}
                      title={experience.position}
                      startDate={experience.startDate}
                      finalDate={experience.endDate}
                      description={experience.description}
                    />
                  )
                })}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Experience
