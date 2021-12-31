import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcShipped, FcMoneyTransfer, FcOnlineSupport } from 'react-icons/fc';
import './Services.css';

const Services = () => {
    return (
        <>
            <Container className='my-5'>
                <Row>
                    <Col sm={12} md={4}>
                        <div className='border py-3 my-2'>
                            <div className="text-center">
                                <FcShipped className='service-icon' />
                            </div>
                            <div>
                                <h6 className="service-title">FREE SHIPPING & RETURN</h6>
                                <p className="service-text">Free shipping on all orders over $99.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='border py-3 my-2'>
                            <div className="text-center">
                                <FcMoneyTransfer className='service-icon' />
                            </div>
                            <div>
                                <h6 className="service-title">MONEY BACK GUARANTEE</h6>
                                <p className="service-text">100% money back guarantee</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='border py-3 my-2'>
                            <div className="text-center">
                                <FcOnlineSupport className='service-icon' />
                            </div>
                            <div>
                                <h6 className="service-title">ONLINE SUPPORT 24/7</h6>
                                <p className="service-text">We are waiting to help you.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;