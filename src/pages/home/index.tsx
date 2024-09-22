import Layout from '@/src/components/layout/app'
import AboutMeComponent from '@/src/components/organisms/AboutMeComponent'
import FeaturedProjects from '@/src/components/organisms/FeaturedProjects'
import Header from '@/src/components/organisms/Header'

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <FeaturedProjects />
        <AboutMeComponent />
      </Layout>
    </>
  )
}
