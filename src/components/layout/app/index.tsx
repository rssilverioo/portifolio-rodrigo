// components/Layout.tsx
import React, { ReactNode } from 'react'
import Contact from '../../organisms/Contact'
import Menu from '../../molecules/Menu'
import Container from '../../atoms/Container'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        <Menu />
      </Container>
      <main className="flex-grow p-4 pt-8 pb-20">{children}</main>
      <Contact />
    </div>
  )
}

export default Layout
