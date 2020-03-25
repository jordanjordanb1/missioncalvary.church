import React from 'react'
import FormGroup from 'react-bootstrap/FormGroup'
import Label from 'react-bootstrap/FormLabel'
import Alert from 'react-bootstrap/Alert'
import { Field, ErrorMessage } from 'formik'
import './InputGroup.scss'

type Type = 'text' | 'number' | 'tel' | 'textarea' | 'email' | 'number'

interface InputGroupProps {
  type: Type
  value: string
  formName: string
  name: string
  isSubmitting: boolean
  placeHolder: string
  component?: string
  rows?: number
}

export default function InputGroup({
  type,
  value,
  formName,
  name,
  isSubmitting,
  placeHolder,
  component,
  rows,
}: InputGroupProps) {
  return (
    <FormGroup>
      <ErrorMessage name={`${formName}.${name}`}>
        {msg => (
          <Alert className="mb-3 form-error text-center" variant="danger">
            {msg}
          </Alert>
        )}
      </ErrorMessage>

      <Label htmlFor={`${formName}.${name}`} className="sr-only">
        {`${placeHolder}`}
      </Label>

      <Field
        className="form-control"
        disabled={isSubmitting}
        type={type}
        name={`${formName}.${name}`}
        id={`${formName}.${name}`}
        value={value}
        placeholder={`${placeHolder}`}
        component={component || 'input'}
        rows={rows}
      />
    </FormGroup>
  )
}
