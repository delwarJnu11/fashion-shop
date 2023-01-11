import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://fashion-shop-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="testimonial-bg">
            <Container>
                <h3
                    className="text-center text-white pt-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    What Our Customer Say
                </h3>
                <p
                    className="text-center text-white"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    Your Satisfaction is our goal.
                </p>
                <Row>
                    <Slider {...settings}>
                        {reviews.map((review) => (
                            <Col sm={12} md={4} key={review._id}>
                                <div
                                    className="text-center m-1 p-3"
                                    data-aos="fade-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000"
                                >
                                    <div className="review-image">
                                        <img
                                            src={`data:image/png;base64,${review.image}`}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="reviewer-name my-2">
                                        {review.name}
                                    </h4>
                                    <p className="my-2">
                                        <Rating
                                            readonly
                                            style={{ color: "goldenrod" }}
                                            initialRating={review.rating}
                                            emptySymbol={
                                                <FontAwesomeIcon
                                                    icon={emptyStar}
                                                />
                                            }
                                            fullSymbol={
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                />
                                            }
                                        />
                                    </p>
                                    <p className="review-text">
                                        {review.description}
                                    </p>
                                </div>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;
