import React, { useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductWishItems from './ProductWishItems';
import Account from './Account';

const Header = ({ setSearchValue, handleSearchValue }) => {
    const [showWisList, setShowWisList] = useState(false);
    const [showAccount, setShowAcount] = useState(false);
    const favorite = useSelector((state) => state.product.favorite);
    const basket = useSelector((state) => state.product.basket);

    const handleShowWishList = () => setShowWisList(!showWisList);
    const handleShowAccount = () => setShowAcount(!showAccount);

    return (
        <>
            <ProductWishItems {...{ show: showWisList, hide: handleShowWishList }} />
            <Account {...{ show: showAccount, hide: handleShowAccount }} />
            <header>
                <Navbar expand="lg" className="bg-body-light">
                    <Container className='p-0'>
                        <Navbar.Brand href="#"><span className='brand-color'>M</span>oBoo<span className='brand-color'>M</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse className='row justify-content-end gx-5' id="navbarScroll">
                            <Form className='col-12 my-2 my-lg-0 col-lg-6' onSubmit={handleSearchValue}>
                                <Form.Control
                                    type="search"
                                    placeholder="What do you want to buy today?"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </Form>
                            <Nav
                                className="col-12 col-lg-5 m-1 my-lg-0 text-center fw-semibold"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >
                                <Nav.Link className='col px-1'>Store</Nav.Link>
                                <Nav.Link className='col px-1' onClick={setShowAcount}>Account</Nav.Link>
                                <Nav.Link className='col px-1 position-relative' onClick={setShowWisList}>Wish List{favorite.length > 0 && <span className='counter'>{favorite.length}</span>}</Nav.Link>
                                <Nav.Link className='col px-0 basket position-relative'><b>Basket<i className="bi bi-basket2"></i></b>{basket.length > 0 && <span className='counter red'>{basket.length}</span>}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;