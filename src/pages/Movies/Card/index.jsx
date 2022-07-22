import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const CardItem = ({ movie }) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                       Género: {movie.genre.name}
                    </Card.Text>
                    <Button variant="primary">DETALLE</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardItem;
