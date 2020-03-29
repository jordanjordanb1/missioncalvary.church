import React from 'react'
import { default as JumbotronBootstrap } from 'react-bootstrap/Jumbotron'
import CoverImage from '../../CoverImage/CoverImage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Homepage() {
  return (
    <>
      <CoverImage imgName={'jumbotron.jpg'} />
      <JumbotronBootstrap
        fluid
        className="d-flex justify-content-center align-items-center m-0"
      >
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
                      Every good and perfect gift is from above, coming down
                      from the Father of the heavenly lights, who does not
                      change like shifting shadows.
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
    </>
  )
}