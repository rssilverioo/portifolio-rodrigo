import { getProjects } from '@/src/api/get-projects'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Card from '../../molecules/Card'
import { useQuery } from '@tanstack/react-query'

const FeaturedProjects = () => {
  const { data: result } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  console.log(result)

  return (
    <div
      className="border-b border-zinc-800 border-opacity-70 p-6 py-20"
      id="projects"
    >
      <Container>
        <div className="lg:w-1/2">
          <Text
            title="Featured Projects"
            subtitle="Here are some of the selected projects that showcase my passion for front-end development."
          />
        </div>
        {result &&
          result.map((project) => {
            return (
              <Card
                key={project.id}
                client={project.client}
                description={project.description}
                imageLink={project.image}
                title={project.name}
                year={project.year}
                githubLink={project.github}
                link={project.demo}
              />
            )
          })}
      </Container>
    </div>
  )
}

export default FeaturedProjects
