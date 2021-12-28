import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { signInWithGoogle, signInWithEmailPassword } = useAuth();

    const location = useLocation();
    const navigate = useNavigate()
    //handle google sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }

    //Handle Email Password Login
    const handleEmailAndPassword = (e) => {
        e.preventDefault();
        signInWithEmailPassword(loginData.email, loginData.password, location, navigate)
    }
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5">
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={5}>
                        <h3 className="my-4">Please Login</h3>
                        <Form onSubmit={handleEmailAndPassword}>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="email" visuallyHidden>
                                        Your Email Address
                                    </Form.Label>
                                    <InputGroup className="w-100 mb-3">
                                        <InputGroup.Text className='border-0 icon'>
                                            <FaEnvelope />
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            className='input-field'
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="current-email"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row xs={1} className="mt-2">
                                <Col className="text-start  col-12 col-md-12">
                                    <Form.Label htmlFor="password" visuallyHidden>
                                        Your Password
                                    </Form.Label>
                                    <InputGroup className="mb-2 w-100">
                                        <InputGroup.Text className='border-0 icon'>
                                            <FaLock></FaLock>
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            className='input-field'
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            id="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <div className="d-flex justify-content-between">
                                <Button type="submit" className="mt-2 w-50 login-button">
                                    Login
                                </Button>
                                <Button type="reset" variant="danger" className="mt-2 ms-2 w-50 reset-button">
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signup">
                            <h6 className="my-3 text-center"> New User? Please Register</h6>
                        </NavLink>
                        <div className="text-center">
                            <Button onClick={handleGoogleSignIn} className="login-button"> <FcGoogle /> Continue With Google</Button>
                        </div>
                    </Col>
                    <Col sm={12} md={7}>
                        <div className='d-flex justify-content-end'>
                            <img className="img-fluid" src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;