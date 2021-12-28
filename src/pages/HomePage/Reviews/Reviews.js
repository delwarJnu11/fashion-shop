import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-gorge-89531.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    console.log(reviews)
    return (
        <Container className="my-5">
            <h3 className="text-center">What Our Customer Say</h3>
            <p className="text-center">Your Satisfaction is our goal.</p>
            <Row xs={1} md={3} className="g-4 mt-4">
                {
                    reviews.map(review => <Col key={review._id}>
                        <div className="text-center p-3 border h-100">
                            <div>
                                <div className="review-image">
                                    <img src={`data:image/png;base64,${review.image}`} className='img-fluid' alt="" />
                                </div>
                                <h4 className="name my-2">{review.name}</h4>
                                <p className="my-2"><Rating
                                    readonly
                                    style={{ color: "goldenrod" }}
                                    initialRating={review.rating}
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                /></p>
                                <p className="review-text">{review.description}</p>

                            </div>
                        </div>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;