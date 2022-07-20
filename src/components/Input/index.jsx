import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
    id,
    label,
    name,
    type,
    handleChange,
    value,
    errors
}) => {
    return (
        <Form.Group>
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                value={value}
            />
            {errors ? <Form.Text className="text-danger">{errors}</Form.Text> : null}
        </Form.Group>
    );
}

export default Input;
