import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductWishItems = ({ show, hide }) => {
    const favorite = useSelector((state) => state.product.favorite);

    return (
        <Modal show={show} onHide={hide} centered>
            <Modal.Header closeButton>
                <Modal.Title><i className="bi bi-heart-fill text-danger me-2"></i>Wish List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {favorite.length > 0 ?
                    <div className='products'>
                        <Row className='gy-3 gx-4'>
                            {favorite.map(data =>
                                <Col md={6} lg={4} key={data.id}>
                                    <ProductItem product={data} isFav={true} />
                                </Col>)}
                        </Row>
                    </div>
                    : <div className='text-center'>No Item Found</div>}
            </Modal.Body>
        </Modal>
    )
}

export default ProductWishItems;