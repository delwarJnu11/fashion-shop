import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../HomePage/product/Product';

const Shop = () => {
    const { products } = useProducts();
    return (
        <>
            <Container className='my-5'>
                <h3 className='text-center'>Our Latest PRODUCTS</h3>
                <p className='text-center mb-4'>Amazing products added recently in our catalog</p>
                <Row>
                    {
                        products.map(product => <Product product={product} key={product._id}></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Shop;