import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import useProducts from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import OfferBanner from "../OfferBanner/OfferBanner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    const { products } = useProducts();

    if (!products) {
        return (
            <div className="text-center">
                <FadeLoader
                    size={150}
                    color={"#b57600"}
                    speedMultiplier={1.5}
                />
            </div>
        );
    }
    return (
        <div>
            <>
                <Banner></Banner>
                <Services></Services>
                <Products></Products>
                <OfferBanner></OfferBanner>
                <Reviews></Reviews>
                <Blogs></Blogs>
                <Footer></Footer>
            </>
        </div>
    );
};

export default Home;
