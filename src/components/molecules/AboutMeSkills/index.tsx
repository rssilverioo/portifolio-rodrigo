import { useQuery } from '@tanstack/react-query'
import Badge from '../../atoms/Badge'
import Text from '../../atoms/Text'
import { getSkills } from '@/src/api/get-skills'

const AboutMeSkills = () => {
  const { data: result } = useQuery({
    queryKey: ['skills'],
    queryFn: getSkills,
  })

  return (
    <>
      <div className="flex justify-between  flex-col md:flex-row w-full">
        <div className="w-full">
          <Text title="my skills" />
        </div>
        <div className="w-full gap-2 flex flex-col">
          <h1 className="font-light text-base font-manrope">
            I am always looking to add more skills. At the moment I am looking
            to improve my knowledge with Node and getting to know Next Js
            better.
          </h1>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {result &&
              result.map((skill) => {
                return <Badge key={skill.id} title={skill.name} />
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMeSkills
