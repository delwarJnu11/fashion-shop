import React from 'react';
import { Col } from 'react-bootstrap';
import './Product.css';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Col>
            <div className="product-wrapper" data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div product-detail>
                    <div className="product-image">
                        <img src={product.image} className='img-fluid' alt="" />
                    </div>
                    <h5 className='my-2'>{product.name}</h5>
                    <h6>${product.price}</h6>
                </div>
                <div>
                    <Link className='quickview' to={`/${product._id}`}>
                        <p className='quickview-text'> <FaEye /> QUICK VIEW</p>
                    </Link>

                </div>
            </div>
        </Col>
    );
};

export default Product;