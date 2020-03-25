import React from 'react'
import './Contact.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from './Form/Form'

export default function Contact() {
  return (
    <Row as="section" className="contact-section">
      <Col
        xs="12"
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
        className="p-5"
      >
        <h1 className="mb-4 text-center">Contact us</h1>

        <ContactForm />
      </Col>
    </Row>
  )
}
