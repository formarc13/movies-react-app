import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const CardItem = ({ movie }) => {
    return (
        <Col xs={12} md={3} className="p-2">
            <Card className="h-100 shadow p-3 mb-5 bg-body rounded border border-0">
                <Card.Img variant="top" src="http://placeimg.com/300/300/any" />
                <Card.Body className="d-flex justify-content-between align-items-center flex-column">
                    <Card.Title className="fs-3 text-center text-secondary">{movie.title}</Card.Title>
                    <Card.Text>
                       Género: {movie.genre?.name}
                    </Card.Text>
                    <div className="d-flex justify-content-evenly align-items-center w-100">
                        <Button variant="success"><FontAwesomeIcon icon={faPenToSquare} /></Button>
                        <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardItem;
