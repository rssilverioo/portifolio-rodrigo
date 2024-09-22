import Badge from '../../atoms/Badge'
import Text from '../../atoms/Text'

const AboutMeSkills = () => {
  return (
    <>
      <div className="flex justify-between  flex-col md:flex-row w-full">
        <div className="w-full">
          <Text title="my skills" />
        </div>
        <div className="w-full gap-2 flex flex-col">
          <h1 className="font-light text-base font-manrope">
            I am always looking to add more skills.Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </h1>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            <Badge title="html" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMeSkills
