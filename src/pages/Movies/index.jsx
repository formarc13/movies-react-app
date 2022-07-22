import React, {useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import { moviesServices } from '../../services/api/moviesServices';
import CardItem from './Card';

const Movies = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            let response = await moviesServices.obtenerPeliculas();

            return response;
        }

        fetchMovies()
        .then(res => setMovies(res.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <Container>
            <h1 className='text-center mb-3 mt-3'>NUESTRAS PELIS</h1>
            <Row>
                {
                    movies.map((movie, index) => (
                        <CardItem key={index} movie={movie}/>
                    ))
                }
            </Row>
        </Container>
    );
}

export default Movies;
