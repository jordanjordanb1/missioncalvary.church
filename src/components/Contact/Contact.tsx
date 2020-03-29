import React from 'react'
import './Contact.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SocialSideBar from './SocialSideBar/SocialSideBar'
import ContactForm from './Form/Form'

export default function Contact() {
  return (
    <Row className="contact p-2 pt-5 pb-3">
      <Col xs="12">
        <Row>
          <Col
            xs="12"
            md={{ span: 8, offset: 2 }}
            lg={{ span: 6, offset: 3 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Row>
              <Col xs="12" md="11">
                <ContactForm />
              </Col>
              <Col xs="12" md="1">
                <SocialSideBar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
