import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Footer from '../components/shared/footer/Footer'
import Header from '../components/shared/header/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
