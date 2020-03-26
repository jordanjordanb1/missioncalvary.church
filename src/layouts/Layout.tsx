import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'
import Jumbotron from '../components/shared/Jumbotron/Jumbotron'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container fluid as="main" className="p-0">
        <Jumbotron
          homePage={false}
          imgName={'aboutus.jpg'}
          message={'About us'}
          bibleVerse={'This is just about us'}
        />
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
