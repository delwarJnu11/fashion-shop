import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from 'react-rating';
import './Purchase.css';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://enigmatic-gorge-89531.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])
    console.log(product)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.name = user.displayName;
        data.status = "pending";
        data.product = product;
        swal("Good job!", "You Purchased the product successfully!", "success");
        navigate('/dashboard/myOrders')
        reset();
        fetch('https://enigmatic-gorge-89531.herokuapp.com/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
    };
    return (
        <>
            <Container className="my-4">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={6}>
                        <div>
                            <InnerImageZoom
                                src={product.image}
                                zoomSrc={product.image}
                                zoomType="hover"
                                zoomPreload={true}
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div>
                            <h4 className='product-title'>{product.name}</h4>
                            <Rating
                                style={{ color: 'goldenrod' }}
                                readonly
                                initialRating={product.rating}
                                emptySymbol={<FontAwesomeIcon icon={emptyStart}></FontAwesomeIcon>}
                                fullSymbol={<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>}
                            ></Rating>
                            <p className='mt-3'>
                                <strong className='product-price'>${product.price}</strong>
                            </p>
                            <p className='product-description'>{product.description}</p>
                            <p className='stock'>AVAILABILITY: <strong className='stock'>{product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}</strong></p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3 input-field" defaultValue={user?.displayName} {...register("name")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3 input-field" defaultValue={user?.email} {...register("email", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Address" className="w-100 form-control mb-3 input-field" {...register("address", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Phone" className="w-100 form-control mb-3 input-field" {...register("phone", { required: true })} />
                                </Col>
                            </Row>
                            <Button className="bannerButton purchase-btn" type="submit">
                                Place Order
                            </Button>
                        </form>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Purchase;