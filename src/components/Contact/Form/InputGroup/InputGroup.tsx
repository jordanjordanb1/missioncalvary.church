import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import Alert from 'react-bootstrap/Alert';
import { Field, ErrorMessage } from 'formik';
import './InputGroup.scss';

type Type = 'text' | 'number' | 'tel' | 'textarea' | 'email' | 'number';

type InputGroupProps = {
  readonly type: Type;
  readonly value: string;
  readonly formName: string;
  readonly name: string;
  readonly isSubmitting: boolean;
  readonly placeHolder: string;
  readonly component?: string;
  readonly rows?: number;
};

const InputGroup: React.SFC<InputGroupProps> = ({
  type,
  value,
  formName,
  name,
  isSubmitting,
  placeHolder,
  component,
  rows,
}): JSX.Element => (
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
);

export default React.memo(InputGroup);
