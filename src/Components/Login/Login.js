import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import login from '../../iamges/login-removebg-preview.png'
import { Form,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Container, Spinner, Alert } from 'react-bootstrap';



const Login = () => {

const [loginData, setLoginData] = useState([]);
    const { user, loginUser, isLoading, authError,signInWithGoogle } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    console.log(loginData);
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
    }

    return (
        <Container>
            {!isLoading && <Form className="w-25 mx-auto" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <NavLink style={{ textDecoration: 'none' }} to="/register">New User? Please click here to register</NavLink>
            </Form>}
            {
                isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>
            }
            {
                user?.email && <Alert variant="success">
                    Logged In Succesfully!
                </Alert>
            }

<button onClick={signInWithGoogle}>Login</button>
        </Container>
    );
};

export default Login;