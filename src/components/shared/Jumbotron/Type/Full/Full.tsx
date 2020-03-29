import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { default as JumbotronBootstrap } from 'react-bootstrap/Jumbotron'
import CoverImage from '../../CoverImage/CoverImage'

interface FullProps {
  imgName?: string
  message?: string
  bibleVerse?: string
  bibleLocation?: string
}

export default function Full({
  imgName,
  message,
  bibleVerse,
  bibleLocation,
}: FullProps) {
  return (
    <>
      {imgName !== 'none' ? (
        <CoverImage imgName={imgName || 'jumbtron.jpg'} />
      ) : (
        ''
      )}
      <JumbotronBootstrap
        fluid
        className="d-flex justify-content-center align-items-center m-0"
      >
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="message">{message}</h1>

              {bibleVerse ? (
                <Row>
                  <Col xs="12" lg={{ span: 8, offset: 2 }}>
                    <blockquote className="blockquote">
                      <p className="mb-0 text-center">{bibleVerse}</p>
                      {bibleLocation ? (
                        <footer className="blockquote-footer text-right">
                          <cite
                            className="mr-3"
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                          >
                            {bibleLocation}
                          </cite>
                        </footer>
                      ) : (
                        ''
                      )}
                    </blockquote>
                  </Col>
                </Row>
              ) : (
                ''
              )}
            </Col>
          </Row>
        </Container>
      </JumbotronBootstrap>
    </>
  )
}
