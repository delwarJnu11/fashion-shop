import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../product/Product';

const Products = () => {
    const { products } = useProducts();
    return (
        <>
            <Container className='my-5'>
                <h3 className='text-center' data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">FEATURED PRODUCTS</h3>
                <p className='text-center mb-4' data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Amazing products added recently in our catalog</p>
                <Row xs={1} md={4} className='g-4 mt-2'>
                    {
                        products.slice(0, 4).map(product => <Product product={product} key={product._id}></Product>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Products;