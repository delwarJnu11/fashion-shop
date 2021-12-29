import React, { useState } from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const SignUp = () => {
    const [registerData, setRegisterData] = useState();
    const { error, signInWithGoogle, createNewUser } = useAuth();
    console.log(registerData)
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    //handle google sign In
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    //Register New User
    const handleNewUser = e => {
        e.preventDefault();
        createNewUser(registerData.name, registerData.email, registerData.password, navigate);
    };
    return (
        <>
            <Container className="my-5">
                <Row className="d-flex align-items-center">
                    <Col sm={12} md={5}>
                        <h3 className="my-4">Please Register</h3>
                        <h5>{error}</h5>
                        <Form onSubmit={handleNewUser}>
                            <Row>
                                <Col className="text-start">
                                    <Form.Label htmlFor="name" visuallyHidden>
                                        Your Name
                                    </Form.Label>
                                    <InputGroup className="w-100 mb-3">
                                        <InputGroup.Text className='border-0 icon'>
                                            <FaUser />
                                        </InputGroup.Text>
                                        <FormControl
                                            onBlur={handleOnBlur}
                                            className='input-field'
                                            type="name"
                                            id="name"
                                            name="name"
                                            autoComplete="current-name"
                                            placeholder="Enter your Name"
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>
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
                                <Button type="submit" className="mt-3 w-50 login-button">
                                    Register
                                </Button>
                            </div>
                        </Form>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <h6 className="my-3"> Already Have a Account? Please Login</h6>
                        </NavLink>
                        <div>
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
            <Footer></Footer>
        </>
    );
};

export default SignUp;