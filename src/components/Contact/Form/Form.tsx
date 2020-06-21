import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import emailjs from 'emailjs-com';
import InputGroup from './InputGroup/InputGroup';

/* TODO:
//  1: Add loading animation when sending form
//  2: Display error messages on form error
*/

const ContactForm: React.FC = (): JSX.Element => {
  const [formSent, setFormSent] = useState(false);

  const ContactSchema = Yup.object().shape({
    contact: Yup.object().shape({
      name: Yup.string()
        .min(3, 'Name is not valid')
        .max(25, 'Name is not valid')
        .required('Name is required'),
      phone: Yup.string()
        .matches(
          /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
          'Phone number is not valid',
        )
        .required('Phone number is required'),
      message: Yup.string()
        .min(3, 'Message is not valid')
        .max(500, 'Message is too long')
        .required('Message is required'),
    }),
  });

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
        onSubmit={async ({ contact: { name, phone, message } }, { setSubmitting }) => {
          setSubmitting(true);

          const template_params = {
            from_name: `${name}`,
            name: `${name}`,
            phone: `${phone}`,
            message: `${message}`,
          };

          emailjs
            .send(
              'default_service',
              'template_0za42WL7',
              template_params,
              'user_RIzlwycFLC1SvffqaKkTs',
            )
            .then(
              res => setFormSent(true),
              err => console.error(err),
            );

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values: { contact } }) => (
          <Form className="form">
            {/* === NAME === */}
            <InputGroup
              type="text"
              formName="contact"
              name="name"
              isSubmitting={isSubmitting}
              value={contact.name}
              placeHolder="Your name..."
            />

            {/* === PHONE === */}
            <InputGroup
              type="text"
              formName="contact"
              name="phone"
              isSubmitting={isSubmitting}
              value={contact.phone}
              placeHolder="Your phone number..."
            />

            {/* === MESSAGE === */}
            <InputGroup
              type="textarea"
              formName="contact"
              name="message"
              isSubmitting={isSubmitting}
              value={contact.message}
              placeHolder="Your message..."
              component="textarea"
              rows={5}
            />

            <FormGroup className="mb-4">
              <Button type="submit" disabled={isSubmitting} className="p-2 pl-4 pr-4">
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    );
  } else {
    return <h2 className="text-uppercase text-center mt-5 mb-5">Form was successfully sent!</h2>;
  }
};

export default React.memo(ContactForm);
