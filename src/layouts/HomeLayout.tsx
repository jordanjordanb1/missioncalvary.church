import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'
import Jumbotron from '../components/shared/Jumbotron/Jumbotron'

const HomeLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <Container fluid as="main" className="p-0">
        <Jumbotron homePage={true} />
        {children}
      </Container>
      <Footer />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
