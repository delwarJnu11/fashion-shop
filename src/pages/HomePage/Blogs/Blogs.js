import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
// import Footer from '../../Shared/Footer/Footer';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-gorge-89531.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <>
            <Container className='my-5'>
                <h3 className="text-center mt-4" data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Our Latest Blogs</h3>
                <p className="text-center mb-4" data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Upadte News of Fashion & LifeStyle.</p>
                <Row>
                    {
                        blogs.map(blog => <Col sm={12} md={4} key={blog._id} >
                            <div className='blog-image' data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <img src={`data:image/png;base64,${blog.image}`} className='img-fluid' alt="" />
                            </div>
                            <div className='p-2' data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <p className="text-muted fw-bold">Author- {blog.author}</p>
                                <h4 style={{ fontFamily: "Roboto", fontSize: "1.3em" }}>{blog.title}</h4>
                                <p className='review-text text-dark'>{blog.description} <Link to="">read more</Link></p>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Blogs;