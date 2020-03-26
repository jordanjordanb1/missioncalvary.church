import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'
import Jumbotron from '../components/shared/Jumbotron/Jumbotron'

interface LayoutProps {
  homePage: boolean
  imgName?: string
  message?: string
  bibleVerse?: string
  bibleLocation?: string
  children: any
}

const Layout = ({
  children,
  homePage,
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
          homePage={homePage}
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
