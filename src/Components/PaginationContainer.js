import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationContainer = ({ pagination, handlePagination }) => {
    console.log("pagination", pagination);
    return (
        <>
            <div className='pagination-container text-center'>
                <Pagination>
                    <Pagination.Prev onClick={() => handlePagination(pagination.step - 1, "prev")} />
                    {pagination.array.map(dt =>
                        <Pagination.Item key={dt} onClick={() => handlePagination(dt)} active={dt === pagination.step}>{dt}</Pagination.Item>
                    )}
                    <Pagination.Next onClick={() => handlePagination(pagination.step + 1, "next")} />
                </Pagination>
            </div>
        </>
    );
}

export default PaginationContainer;