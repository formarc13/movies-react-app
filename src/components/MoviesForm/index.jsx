import React from 'react';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Input from '../../components/Input';
import { moviesServices } from '../../services/api/moviesServices';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.name = 'Campo requerido';
  }
  
  if (!values.rating) {
    errors.rating = 'Campo requerido';
  } 

  if (!values.awards) {
    errors.awards = 'Campo requerido';
  } 
  if (!values.release_date) {
    errors.release_date = 'Campo requerido';
  } 
  if (!values.duracion) {
    errors.duracion = 'Campo requerido';
  } 
  if (!values.genre_id) {
    errors.genre_id = 'Campo requerido';
  } 

  return errors;
};

const MoviesForm = ({movie, toEdit = false}) => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: movie ? movie.title : '',
      rating: movie ? movie.rating : '',
      awards: movie ? movie.awards : '',
      release_date: movie ? movie.release_date : "",
      duracion: movie ? movie.length : "",
      genre_id: movie ? movie.genre_id : ""
    },
    validate,
    onSubmit: values => {
        console.log(values)
        const fetchMovie = async () => {
            let response = await moviesServices.agregarPelicula(values)

            return response
        }
        fetchMovie()
        .then(res => alert(JSON.stringify(res)))
        .catch(err => console.log(err))
    },
  });
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
        <h2 className='text-center mb-2 mt-2'>PELIS</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Input 
              id="title"
              label="Título"
              name="title"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.title}
              errors={formik.errors.title}
          />
          <Input 
              id="rating"
              label="Rating"
              name="rating"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.rating}
              errors={formik.errors.rating}
          />
          <Input 
              id="awards"
              label="Premios"
              name="awards"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.awards}
              errors={formik.errors.awards}
          />
          <Input 
              id="release_date"
              label="Fecha de estreno"
              name="release_date"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.release_date}
              errors={formik.errors.release_date}
          />
          <Input 
              id="length"
              label="Duración"
              name="duracion"
              type="text"
              handleChange={formik.handleChange}
              value={formik.values.duracion}
              errors={formik.errors.duracion}
          />
          <div>
            <select
                name="genre_id"
                onChange={formik.handleChange}
                value={formik.values.genre_id}
            >
                <option value="1">
                    Comedia
                </option>
            </select>
          </div>
        <Button className="mt-2" type="submit" variant="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
      
    </Container>
  );
};

export default MoviesForm;