import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import './Header.scss'

export default function Header() {
  const data = useStaticQuery(graphql`
      {
        file(relativePath: { eq: "logo.png" }) {
          sharp: childImageSharp {
            fixed(width: 110) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `),
    [background, setBackground] = useState('none'),
    [navHeight, setNavHeight] = useState('100px'),
    [textColor, setTextColor] = useState('rgb(255, 255, 255)')

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const y = window.scrollY

      if (y <= 30) {
        setBackground('none')
        setNavHeight('100px')
        setTextColor('rgb(255, 255, 255)')
      } else if (y >= 31 && y <= 50) {
        setBackground('rgba(255, 255, 255, 0.2)')
        setNavHeight('100px')
        setTextColor('rgb(205, 205, 205)')
      } else if (y >= 51 && y <= 70) {
        setBackground('rgba(255, 255, 255, 0.4)')
        setNavHeight('80px')
        setTextColor('rgb(145, 145, 145)')
      } else if (y >= 71 && y <= 90) {
        setBackground('rgba(255, 255, 255, 0.6)')
        setNavHeight('70px')
        setTextColor('rgb(85, 85, 85)')
      } else if (y >= 91 && y <= 110) {
        setBackground('rgba(255, 255, 255, 0.8)')
        setNavHeight('60px')
        setTextColor('rgb(25, 25, 25)')
      } else if (y >= 111) {
        setBackground('rgba(255, 255, 255, 1)')
        setNavHeight('50px')
        setTextColor('rgb(0, 0, 0)')
      }
    })
  })

  return (
    <Navbar expand="lg" fixed="top" style={{ background }} className="p-0">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="p-0"
          style={{ height: navHeight }}
        >
          <Img
            fixed={data.file.sharp.fixed}
            alt="Mission Calvary Church's Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          label="MENU"
          style={{ color: textColor }}
        >
          <i className="fas fa-bars"></i>&nbsp; MENU
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="mr-auto ml-lg-5">
            <Nav.Link
              as={Link}
              activeClassName="active"
              className="m-lg-2"
              style={{ color: textColor }}
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              activeClassName="active"
              className="m-lg-2"
              style={{ color: textColor }}
              to="/about"
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              activeClassName="active"
              className="m-lg-2"
              style={{ color: textColor }}
              to="/events"
            >
              Events
            </Nav.Link>

            <Nav.Link
              as={Link}
              activeClassName="active"
              className="m-lg-2"
              style={{ color: textColor }}
              to="/pastors"
            >
              Pastors
            </Nav.Link>

            <Nav.Link
              as={Link}
              activeClassName="active"
              className="m-lg-2"
              style={{ color: textColor }}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
