import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import swal from 'sweetalert';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [image, setImage] = useState(null);

    // Handle form submit
    const handleProductSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('rating', rating);
        formData.append('stock', stock);
        formData.append('image', image);


        fetch('https://enigmatic-gorge-89531.herokuapp.com/products', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                swal("Good job!", "Your product added successfully done!", "success");
            })
    }


    return (
        <Container className="my-5">
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <h1 className="dashboard-title">Add A Product</h1>
                    <Form onSubmit={handleProductSubmit}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    product Name
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setName(e.target.value)}
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="current-name"
                                        placeholder="Enter Product Name"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="description" visuallyHidden>
                                    Product Description
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setDescription(e.target.value)}
                                        type="text"
                                        id="description"
                                        name="description"
                                        autoComplete="current-description"
                                        placeholder="Enter Product Description"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="price" visuallyHidden>
                                    Product Price
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setPrice(e.target.value)}
                                        name="price"
                                        type="text"
                                        autoComplete="current-price"
                                        id="price"
                                        placeholder="Enter Product Price"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="rating" visuallyHidden>
                                    Product Rating
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setRating(e.target.value)}
                                        name="rating"
                                        type="text"
                                        autoComplete="current-rating"
                                        id="rating"
                                        placeholder="Enter Product rating"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="stock" visuallyHidden>
                                    Product Stock
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setStock(e.target.value)}
                                        name="stock"
                                        type="text"
                                        autoComplete="current-stock"
                                        id="stock"
                                        placeholder="Enter Product stock"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="image" visuallyHidden>
                                    Product Image
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setImage(e.target.files[0])}
                                        name="image"
                                        type="file"
                                        id="image"
                                        accept='image/*'
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-between">
                            <Button type="submit" className="mt-3 w-50 login-button">
                                Add Product
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>

    );
};

export default AddProduct;