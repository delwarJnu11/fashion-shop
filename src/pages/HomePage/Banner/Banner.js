import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item className="banner1">
                    <Carousel.Caption className="banner-text" >
                        <Row>
                            <Col md={6}> </Col>
                            <Col md={6} className="text-left" data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1000">

                                <h3 className='banner-subtitle'>New Season Dresses</h3>
                                <h2 className='offer-text'>
                                    <span className="upto">UPTO</span>
                                    <span className="offer">50% OFF</span>
                                </h2>
                                <h4 className='banner-subtitle'>STARING AT $ 99.99</h4>
                                <div className='btn-div' data-aos="zoom-in"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000">
                                    <Link to="/shop">
                                        <button className="sliderButton">Shop Now</button>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner2">
                    <Carousel.Caption className="banner-text">
                        <Row>
                            <Col md={6} className="d-flex justify-content-end flex-column" data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <h3 className='banner-subtitle'>New Season Dresses</h3>
                                <h2 className='offer-text'>
                                    <span className="upto">UPTO</span>
                                    <span className="offer">20% OFF</span>
                                </h2>
                                <h4 className='banner-subtitle'>STARING AT $ 79.99</h4>
                                <div className='btn-div'>
                                    <Link to="/shop">
                                        <button className="sliderButton">Shop Now</button>
                                    </Link>
                                </div>
                            </Col>
                            <Col md={6}>

                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;