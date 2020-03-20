import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Footer from "../components/shared/footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Container as="main">
        {children}
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
