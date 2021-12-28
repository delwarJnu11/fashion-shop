import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OfferBanner.css';

const OfferBanner = () => {
    return (
        <div className='banner-bg'>
            <Container>
                <Row>
                    <Col sm={12} md={12} className=''>
                        <div className='d-flex justify-content-center align-items-center flex-column text-wrapper'>
                            <h3 className='offer-banner-text'>New Season Sale</h3>
                            <h2 className="offer-banner">40% OFF</h2>
                            <div className='btn-div mt-3'>
                                <button className="bannerButton">Shop Now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OfferBanner;