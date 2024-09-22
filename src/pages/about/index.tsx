import Layout from '@/src/components/layout/app'
import AboutMeComponent from '@/src/components/organisms/AboutMeComponent'
import Experience from '@/src/components/organisms/Experience'

export default function About() {
  return (
    <Layout>
      <AboutMeComponent aboutme />
      <Experience />
    </Layout>
  )
}
