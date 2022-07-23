import React from 'react';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from '../../components/Input';
import { useAuthContext } from '../../contexts/authContext';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.password) {
    errors.password = 'Campo requerido';
  }

  return errors;
};

const Login = () => {
  const {login} = useAuthContext()
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      
    },
  });
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <h2 className='text-center mb-2 mt-2'>LOGIN</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Input 
              id="email"
              label="Email"
              name="email"
              type="email"
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email}
          />
          <Input 
              id="password"
              label="Password"
              name="password"
              type="password"
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password}
          />
        <Button className="mt-2" type="submit" variant="primary">Enviar</Button>
      </Form>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Login;