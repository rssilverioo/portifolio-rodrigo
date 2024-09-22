import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Card from '../../molecules/Card'

const FeaturedProjects = () => {
  return (
    <div className="border-b border-zinc-800 border-opacity-70 p-6 py-20">
      <Container>
        <div className="lg:w-1/2">
          <Text
            title="Featured Projects"
            subtitle="Here are some of the selected projects that showcase my passion for front-end development."
          />
        </div>
        <Card />
      </Container>
    </div>
  )
}

export default FeaturedProjects
