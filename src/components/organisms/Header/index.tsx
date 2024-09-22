import Container from '../../atoms/Container'
import Information from '../../molecules/Information'

const Header = () => {
  return (
    <div className="border-b border-zinc-800 pb-20 border-opacity-70">
      <Container>
        <Information />
      </Container>
    </div>
  )
}

export default Header
