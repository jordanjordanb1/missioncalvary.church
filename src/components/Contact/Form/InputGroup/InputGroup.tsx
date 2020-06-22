import React from 'react';
import { Field, ErrorMessage } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components/macro';
import InputLabel from '@material-ui/core/InputLabel';

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

const StyledFormControl = styled(FormControl)`
  input,
  textarea {
    color: #1d1c1c;
    border-radius: unset;
    border: 2px solid #1d1c1c;
    box-shadow: none !important;
    transition: all 0.3s ease-in-out 0s;

    &:hover {
      border: 2px solid black;
    }

    &:focus {
      border: 2px solid rgb(150, 150, 150);
    }
  }

  button {
    border-radius: 0px;
    border: none;
    background: #1d1c1c;
    font-size: 1.1em;
    transition: all 0.3s ease-in-out 0s;

    &:hover {
      background: rgb(0, 0, 0);
    }

    &:active {
      background: black !important;
      box-shadow: none !important;
    }

    &:focus {
      box-shadow: 4px 4px 2px -1px rgba(0, 0, 0, 0.3) !important;
      background: white !important;
      color: black !important;
    }
  }

  .form-error {
    border: none;
    border-radius: 0px;
    background: red;
    color: white;
    text-transform: uppercase;
    opacity: 0;
    min-height: 0;
    box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.3);
    animation: show 0.5s ease-in-out forwards;
    overflow: hidden;
  }
`;

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
  <StyledFormControl>
    <ErrorMessage name={`${formName}.${name}`}>
      {msg => <div className="mb-3 form-error text-center">{msg}</div>}
    </ErrorMessage>

    <InputLabel htmlFor={`${formName}.${name}`} className="sr-only">
      {`${placeHolder}`}
    </InputLabel>

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
  </StyledFormControl>
);

export default React.memo(InputGroup);
