import React from 'react'
import './Footer.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <footer className="footer text-center p-5">
      <Container>
        <Row>
          <Col xs="12" lg="6" className="footer-left">
            <h2>
              <span>Mission Calvary</span> Church
            </h2>

            <br />

            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                &nbsp;{' '}
                <a
                  href="https://goo.gl/maps/VMYVd4qLAbYBoqqt7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  231 Meetinghouse Way, Edgartown, MA, USA 02539
                </a>
              </li>
            </ul>

            <ul className="list-inline social-links">
              <li className="list-inline-item m-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item m-2">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item m-2">
                <a
                  href="mailto:missioncalvary@hotmail.com"
                  className="d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </Col>

          <Col xs="12" className="d-lg-none">
            <hr />
            <br />
          </Col>

          <Col xs="12" lg="6" className="footer-right">
            <h2 className="mb-4">Service Hours</h2>

            <div>
              <p className="m-0">Sunday Service</p>
              <p style={{ color: '#ffd615' }}>6:30pm to 8:30pm</p>
            </div>
          </Col>
        </Row>

        <hr />
        <br />

        <Row>
          <Col xs="12" className="text-center">
            <Row>
              <Col xs="12" lg="6" className="text-lg-right p-0">
                Copyright © {new Date().getFullYear()} All Rights Reserved
              </Col>

              <Col className="d-none d-lg-block p-0">|</Col>

              <Col xs="12" lg="5" className="text-lg-left p-0">
                Made with ❤️ by{' '}
                <a target="_blank" href="https://jordanbarbosa.com">
                  Jordan Barbosa
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
