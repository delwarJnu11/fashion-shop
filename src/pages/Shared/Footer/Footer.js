import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faEnvelope, faMapMarkedAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <h4 className='footer-title'>CONTACT INFO</h4>
                        <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon className='icon' icon={faMapMarkedAlt} />
                            <div className='ms-4'>
                                <h6 className='contact-name'>ADDRESS</h6>
                                <p className='text'>123 Banani Road, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                        <hr style={{ border: "0.5px solid white", width: '75%' }} />
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                            <div className='ms-4'>
                                <h6 className='contact-name mt-2'>PHONE</h6>
                                <p className='text'>+880 1749497676</p>
                            </div>
                        </div>
                        <hr style={{ border: "0.5px solid white", width: '75%' }} />
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon className='icon' icon={faEnvelope} />
                            <div className='ms-4'>
                                <h6 className='contact-name mt-2'>EMAIL</h6>
                                <p className='text'>delwarjnu24@gmail.com</p>

                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 className='footer-title mb-3'>ACCOUNT</h4>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> About Us</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Contact us</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> My Account</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Order History</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Advanced Search</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Terms & Conditions</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Priacy & Policy</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 className='footer-title mb-3'>CATEGORY</h4>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Accessories</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Caps</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Bag</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Dress</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Fashion</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Electronics</p>
                        <p className='footer-list'><FontAwesomeIcon className='caret-icon' icon={faCaretRight} /> Shoes</p>
                    </Col>
                    <Col sm={12} md={3}>
                        <h4 className='footer-title mb-3'>NEWSLETTER</h4>
                        <p className='text'>Get all the latest information on Events,
                            Sales and Offers. Sign up for newsletter today.</p>
                        <input type="text" name="email" id="footer-email" />
                        <button className='newsletter-button'>SUBSCRIBE</button>
                    </Col>
                </Row>
                <hr style={{ border: "0.1px solid white" }} />
                <Row className='py-3'>
                    <Col className='d-flex justify-content-between'>
                        <div>
                            <p className='text'>© Fashion Shop 2021. All Rights Reserved</p>
                        </div>
                        <div>
                            <FaFacebookSquare className='social-icon' />
                            <FaLinkedin className='social-icon' />
                            <FaTwitter className='social-icon' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;