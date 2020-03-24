import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import Alert from 'react-bootstrap/Alert'
import Axios from 'axios'
import './ContactForm.scss'

export default function ContactForm() {
  const [formSent, setFormSent] = useState(false)

  const ContactSchema = Yup.object().shape({
    contact: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Name is not valid')
        .max(25, 'Name is not valid')
        .required('Name is required'),
      phone: Yup.string('Phone number is not valid')
        .matches(
          /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
          'Phone number is not valid'
        )
        .required('Phone number is required'),
      message: Yup.string()
        .min(3, 'Message is not valid')
        .max(250, 'Message is too long')
        .required('Message is required'),
    }),
  })

  if (!formSent) {
    return (
      <Formik
        initialValues={{
          contact: {
            name: '',
            phone: '',
            message: '',
          },
        }}
        validationSchema={ContactSchema}
        onSubmit={async (
          { contact: { name, phone, message } },
          { setSubmitting }
        ) => {
          setSubmitting(true)

          const data = { name, phone, message }

          Axios.post(
            `https://getform.io/f/${process.env.GETFORM_API}`,
            data
          ).then(res => setFormSent(true))

          setSubmitting(false)
        }}
      >
        {({ isSubmitting, values: { contact } }) => (
          <Form className="form">
            <Row className="mb-2">
              <Col
                xs="12"
                md={{ span: 10, offset: 1 }}
                lg={{ span: 8, offset: 2 }}
              >
                {/* === NAME === */}
                <FormGroup>
                  <ErrorMessage name="contact.name">
                    {msg => (
                      <Alert
                        className="mb-3 form-error text-center"
                        variant="danger"
                      >
                        {msg}
                      </Alert>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="contact.name" className="sr-only">
                    Your name
                  </Label>

                  <Field
                    className="form-control"
                    disabled={isSubmitting}
                    type="text"
                    name="contact.name"
                    id="contact.name"
                    value={contact.name}
                    placeholder="Your name..."
                  />
                </FormGroup>

                {/* === PHONE === */}
                <FormGroup>
                  <ErrorMessage name="contact.phone">
                    {msg => (
                      <Alert
                        className="mb-3 form-error text-center"
                        variant="danger"
                      >
                        {msg}
                      </Alert>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="contact.phone" className="sr-only">
                    Your phone number
                  </Label>

                  <Field
                    className="form-control"
                    disabled={isSubmitting}
                    type="tel"
                    name="contact.phone"
                    id="contact.phone"
                    value={contact.phone}
                    placeholder="Your phone number..."
                  />
                </FormGroup>

                {/* === MESSAGE === */}
                <FormGroup className="mb-4">
                  <ErrorMessage name="contact.message">
                    {msg => (
                      <Alert
                        className="mb-3 form-error text-center"
                        variant="danger"
                      >
                        {msg}
                      </Alert>
                    )}
                  </ErrorMessage>

                  <Label htmlFor="contact.message" className="sr-only">
                    Your message
                  </Label>

                  <Field
                    className="form-control"
                    disabled={isSubmitting}
                    name="contact.message"
                    id="contact.message"
                    component="textarea"
                    rows="5"
                    value={contact.message}
                    placeholder="Your message..."
                  />
                </FormGroup>

                <FormGroup className="mb-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-2 pl-4 pr-4"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    )
  } else {
    return (
      <h2 className="text-uppercase text-center mt-5 mb-5">
        Form was successfully sent!
      </h2>
    )
  }
}
