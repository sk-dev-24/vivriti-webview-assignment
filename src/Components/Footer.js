import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import amazonpay from '../Images/amazon-pay.svg';
import americanexpress from '../Images/american-express.svg';
import applepay from '../Images/apple-pay.svg';
import bitpay from '../Images/bitpay.svg';
import discover from '../Images/discover.svg';
import ebay from '../Images/ebay.svg';
import mastercard from '../Images/mastercard.svg';
import paypal from '../Images/paypal.svg';
import visa from '../Images/visa.svg';
import verve from '../Images/verve.svg';
import hiper from '../Images/hiper.svg';
import generic from '../Images/generic.svg';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className='justify-content-between text-center text-md-start d-flex flex-row flex-lg-row-reverse'>
                    <Col lg={5}>
                        <div className='d-flex flex-column flex-md-row justify-content-between'>
                            <div>
                                <div className='footer-title'>Socials</div>
                                <div className='media-icons'>
                                    <i className="bi bi-facebook"></i>
                                    <i className="bi bi-twitter"></i>
                                    <i className="bi bi-instagram"></i>
                                    <i className="bi bi-tiktok"></i>
                                    <i className="bi bi-snapchat"></i>
                                </div>
                            </div>
                            <div>
                                <div className='footer-title'>PlatForms</div>
                                <div className='media-icons'>
                                    <i className="bi bi-android2"></i>
                                    <i className="bi bi-apple"></i>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='footer-title'>Sign up</div>
                            <Row>
                                <Col xs={8}>
                                    <Form.Control className='subscribe-text' type="text" placeholder="Your email" />
                                </Col>
                                <Col xs={3}>
                                    <Button variant='dark' className='subscribe-button'>Subscribe</Button>
                                </Col>
                            </Row>
                            <div className='subscribe-note'>By clicking the SUBSCRIBE button, you are agreeing to our <span className='text-primary'><u>Privacy & Cookie Policy</u></span></div>
                        </div>
                        <div>
                            <div className='footer-title mt-5 mx-3 mb-3'>We Accept</div>
                            <div className='cards-pay ms-3 mb-4'>
                                <img src={mastercard} alt='mastercard' />
                                <img src={discover} alt='discover' />
                                <img src={verve} alt='verve' />
                                <img src={americanexpress} alt='americanexpress' />
                                <img src={applepay} alt='applepay' />
                                <img src={bitpay} alt='bitpay' />
                                <img src={hiper} alt='hiper' />
                                <img src={visa} alt='visa' />
                                <img src={ebay} alt='ebay' />
                                <img src={paypal} alt='paypal' />
                                <img src={amazonpay} alt='amazonpay' />
                                <img src={generic} alt='generic' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <section>
                            <Row>
                                <Col md={4}>
                                    <div className='footer-title'>Company Info</div>
                                    <div>About</div>
                                    <div>Social Responsibility</div>
                                    <div>Affiliate</div>
                                    <div>Fashion Blogger</div>
                                </Col>
                                <Col md={4}>
                                    <div className='footer-title'>Help & Support</div>
                                    <div>Shipping Info</div>
                                    <div>Returns</div>
                                    <div>How to Order</div>
                                    <div>How to Track</div>
                                    <div>Size Chart</div>
                                </Col>
                                <Col md={4}>
                                    <div className='footer-title'>Customer Care</div>
                                    <div>Contact Us</div>
                                    <div>Payment</div>
                                    <div>Bonus Point</div>
                                    <div>Notices</div>
                                </Col>
                            </Row>
                            <div className='row'>
                                <div className='copy-right col-12'><i className="bi bi-c-circle" style={{ fontSize: "11px" }}></i>2010-2025 All Rights Reserved</div>
                                <ul className='footer-info-link col-12 d-flex flex-column flex-md-row ms-3'>
                                    <li className='mb-2'>Privacy Center</li>
                                    <li className='mb-2'>Privacy & Cookie Policy</li>
                                    <li className='mb-2'>Manage Cookies</li>
                                </ul>
                                <ul className='footer-info-link col-12 d-flex flex-column flex-md-row ms-3'>
                                    <li className='mb-2'>Terms & Conditions</li>
                                    <li className='mb-2'>Copyright Notice</li>
                                    <li className='mb-2'>Imprint</li>
                                </ul>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;