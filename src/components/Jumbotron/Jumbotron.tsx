import React from 'react'
import './Jumbotron.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { default as JumbotronBootstrap } from 'react-bootstrap/Jumbotron'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Jumbotron() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "jumbotron.jpg" }) {
        child: childImageSharp {
          fluid(maxHeight: 1080, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <JumbotronBootstrap
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Img
        fluid={data.file.child.fluid}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: 0,
        }}
      />

      <Container>
        <Row>
          <Col className="text-center">
            <Row noGutters className="org-name">
              <Col className="text-center">
                <h2 className="text-white">Mission Calvary Church</h2>
              </Col>
            </Row>

            <h1 className="message">
              <span style={{ color: 'orange' }}>GOD</span> IS GOOD{' '}
              <span style={{ color: 'orange' }}>ALL</span> THE TIME
            </h1>

            <Row>
              <Col xs="12" lg={{ span: 8, offset: 2 }}>
                <blockquote className="blockquote">
                  <p className="mb-0 text-center">
                    Every good and perfect gift is from above, coming down from
                    the Father of the heavenly lights, who does not change like
                    shifting shadows.
                  </p>
                  <footer className="blockquote-footer text-right">
                    <cite
                      className="mr-3"
                      style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                      James 1:17
                    </cite>
                  </footer>
                </blockquote>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </JumbotronBootstrap>
  )
}
