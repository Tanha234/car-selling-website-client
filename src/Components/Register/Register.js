import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Form, Spinner, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import login from '../../iamges/login-removebg-preview.png'
import useAuth from '../hooks/useAuth';


const Register = () => {

const [loginData, setLoginData] = useState([]);
const { registerUser, isLoading, user, authError } = useAuth();
const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
console.log(loginData);
const handleRegisterSubmit = e => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
        alert('Password did not match!');
        return;
    }
    registerUser(loginData.email, loginData.password)
}
return (
    <Container>
        {!isLoading && <Form className="w-25 mx-auto" onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password2" onChange={handleOnChange} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <NavLink style={{ textDecoration: 'none' }} to="/login">Already Registerd? Please click here to login</NavLink>
        </Form>}
        {
            isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner></div>
        }
        {
            user?.email && <Alert variant="success">
                Succesfully Registered! <NavLink to="/login">Click Here</NavLink> to login.
            </Alert>
        }
        {
            authError && <Alert variant="danger">
                {authError}
            </Alert>
        }
    </Container>
);
};

    

export default Register;