import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import OfferBanner from '../OfferBanner/OfferBanner';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import useProducts from '../../../hooks/useProducts';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const { products } = useProducts();
    return (
        <div>
            {
                products.length > 0 ? <>
                    <Banner></Banner>
                    <Products></Products>
                    <OfferBanner></OfferBanner>
                    <Reviews></Reviews>
                    <Blogs></Blogs>
                    <Footer></Footer>
                </> : <div className='text-center'>
                    <Spinner animation='border' variant='warning'></Spinner>
                </div>
            }


        </div>
    );
};

export default Home;