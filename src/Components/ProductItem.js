import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBasketItem, addFavoriteItem, deleteFavoriteItem } from '../Redux/productSlice';

const ProductItem = ({ product, isFav }) => {
    const favorite = useSelector((state) => state.product.favorite);
    const isFavorite = favorite.some(dt => dt.id === product.id);
    const dispatch = useDispatch();

    const handleFavoriteItem = (product) => {
        if (isFavorite) dispatch(deleteFavoriteItem(product));
        else dispatch(addFavoriteItem(product));
    }

    return (
        <Card className={isFav ? 'is-fav' : ''}>
            {isFav ? <div className='wish-items'><i className="bi bi-trash-fill text-danger" onClick={() => dispatch(deleteFavoriteItem(product))}></i></div>
                : <div className='wish-items'><i className={"bi bi-suit-heart" + (isFavorite ? "-fill text-danger" : "")} onClick={() => handleFavoriteItem(product)}></i></div>}
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>{product.title.slice(0, 25) + (product.title.length > 25 && "...")}</Card.Title>
                <Card.Text>
                    {product.description.slice(0, 60) + (product.description.length > 60 && "...")}
                    <div className='product-price'>${product.price}</div>
                </Card.Text>
                <div className='star-rating'>
                    {[1, 2, 3, 4, 5].map(dt => {
                        let rate = "bi-star empty-star";
                        if (product.rating > 0) {
                            if (product.rating >= dt || product.rating >= (dt - 0.25)) rate = "bi-star-fill color";
                            else if (product.rating >= (dt - 0.75)) rate = "bi-star-half color";
                        }
                        return <i key={product.rating} className={"bi " + rate}></i>;
                    }
                    )}
                </div>
                {isFav && <Button variant='dark' className='add-basket' onClick={() => dispatch(addBasketItem(product))}>Add to Basket</Button>}
            </Card.Body>
        </Card>
    );
}

export default ProductItem;