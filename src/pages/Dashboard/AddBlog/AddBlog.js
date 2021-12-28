import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import swal from 'sweetalert';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);

    // Handle form submit
    const handleProductSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('image', image);


        fetch('https://enigmatic-gorge-89531.herokuapp.com/blogs', {
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
                                <Form.Label htmlFor="title" visuallyHidden>
                                    Blog TItle
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setTitle(e.target.value)}
                                        type="text"
                                        id="title"
                                        name="title"
                                        autoComplete="current-title"
                                        placeholder="Enter Blog Title"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="description" visuallyHidden>
                                    Blog Description
                                </Form.Label>
                                <InputGroup className="w-100 mb-3">
                                    <FormControl
                                        onBlur={e => setDescription(e.target.value)}
                                        type="text"
                                        id="description"
                                        name="description"
                                        autoComplete="current-description"
                                        placeholder="Enter Blog Description"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="author" visuallyHidden>
                                    Blog Author
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <FormControl
                                        onBlur={e => setAuthor(e.target.value)}
                                        name="author"
                                        type="text"
                                        autoComplete="current-author"
                                        id="price"
                                        placeholder="Enter Blog author"
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
                                Add Blog
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>

    );
};

export default AddBlog;