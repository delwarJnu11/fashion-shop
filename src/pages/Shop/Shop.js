import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../HomePage/product/Product';
import Footer from '../Shared/Footer/Footer';
import FadeLoader from "react-spinners/FadeLoader";

const Shop = () => {
    const { products } = useProducts();
    return (
        <>
            {
                products.length > 0 ? <>
                    <Container className='my-5'>
                        <h3 className='text-center'>Our Latest PRODUCTS</h3>
                        <p className='text-center mb-4'>Amazing products added recently in our catalog</p>
                        <Row xs={1} md={4} className='g-4 mt-2'>
                            {
                                products.map(product => <Product product={product} key={product._id}></Product>)
                            }
                        </Row>
                    </Container>
                    <Footer></Footer>
                </> : <div className='text-center'>
                    <FadeLoader size={150} color={"#b57600"} speedMultiplier={2.5} />
                </div>
            }
        </>
    );
};

export default Shop;