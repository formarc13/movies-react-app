import React from 'react';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from '../../components/Input';
import { usersServices } from '../../services/api/usersServices';
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../config/paths";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Campo requerido';
  } else if (values.name.length > 15) {
    errors.name = 'El nombre no deber tener más de 15 caracteres';
  }
  
  if (!values.email) {
    errors.email = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.password) {
    errors.password = 'Campo requerido';
  } else if (values.password.length < 6 ) {
    errors.password = 'El password debe tener al menos 6 caracteres';
  }

  return errors;
};

const Signup = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      const fetchUsuario = async () => {
        let response = await usersServices.registrarUsuario(values);

        return response;
      }

      fetchUsuario()
      .then(resultado => {
        if(resultado.status !== 400){
          alert("Tu usuario fue creado exitosamente!")
          formik.resetForm()
        }else{
          alert(JSON.stringify(resultado))
        }
      })
      .catch(error => console.log(error)) 
    },
  });
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <h2 className='text-center mb-2 mt-2'>REGISTRO</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Input 
              id="name"
              label="Nombre"
              name="name"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.name}
              errors={formik.errors.name}
          />
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
        <Button className="mt-2" type="submit" variant="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Signup;