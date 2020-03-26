import React from 'react'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container fluid as="main">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
