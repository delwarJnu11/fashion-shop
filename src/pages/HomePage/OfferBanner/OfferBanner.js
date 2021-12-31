import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OfferBanner.css';

const OfferBanner = () => {
    return (
        <div className='banner-bg mt-5'>
            <Container>
                <Row>
                    <Col sm={12} md={12} className=''>
                        <div className='d-flex justify-content-center align-items-center flex-column text-wrapper' data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <h3 className='offer-banner-text'>New Season Sale</h3>
                            <h2 className="offer-banner">40% OFF</h2>
                            <div className='btn-div mt-3' data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <Link to="/shop">
                                    <button className="bannerButton">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OfferBanner;