import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'
import Jumbotron from '../components/shared/Jumbotron/Jumbotron'

type JumbotronType = 'full' | 'small' | 'homepage'

interface LayoutProps {
  type: JumbotronType
  imgName?: string
  message?: string
  bibleVerse?: string
  bibleLocation?: string
  children: any
}

const Layout = ({
  children,
  type,
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}: LayoutProps) => {
  return (
    <>
      <Header />
      <Container fluid as="main" className="p-0">
        <Jumbotron
          type={type}
          imgName={imgName}
          message={message}
          bibleVerse={bibleVerse}
          bibleLocation={bibleLocation}
        />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
