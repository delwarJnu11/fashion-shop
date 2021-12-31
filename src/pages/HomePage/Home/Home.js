import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Products from '../Products/Products';
import OfferBanner from '../OfferBanner/OfferBanner';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import useProducts from '../../../hooks/useProducts';
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
    const { products } = useProducts();
    return (
        <div>
            {
                products.length > 0 ? <>
                    <Banner></Banner>
                    <Services></Services>
                    <Products></Products>
                    <OfferBanner></OfferBanner>
                    <Reviews></Reviews>
                    <Blogs></Blogs>
                    <Footer></Footer>
                </> : <div className='text-center'>
                    <FadeLoader size={150} color={"#b57600"} speedMultiplier={1.5} />
                </div>
            }


        </div>
    );
};

export default Home;