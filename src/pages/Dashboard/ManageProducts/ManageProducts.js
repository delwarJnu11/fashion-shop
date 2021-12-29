import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useProducts from '../../../hooks/useProducts';

const ManageProducts = () => {
    const { products, setProducts } = useProducts();

    //handle delete product
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "You want to Delete this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your product has been deleted!", {
                        icon: "success",
                    });
                    fetch(`https://enigmatic-gorge-89531.herokuapp.com/products/${id}`, {
                        method: "DELETE",
                        'content-type': "application/json",
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                const remainingProducts = products.filter(product => product._id !== id)
                                setProducts(remainingProducts);
                            }
                        })
                } else {
                    swal("Your Product file is safe!");
                }
            });

    }



    return (
        <Container>
            {

                products.length > 0 ? <>
                    <h1 className="dashboard-title text-center">Total Products {products.length}</h1>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div style={{ overflow: 'scroll' }}>
                                <Table striped bordered hover responsive="sm">
                                    <thead>
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Product Id</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => <tr key={product._id}>
                                                <td> <img width="50px" height="50px" src={product.image} alt="" /> </td>
                                                <td>{product._id}</td>
                                                <td>{product?.name}</td>
                                                <td>${product?.price}</td>
                                                <td>
                                                    <Button title="Delete" variant="danger" onClick={() => handleDelete(product._id)}>
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </Button>
                                                </td>

                                            </tr>)
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </> : <div className="text-center">
                    <Spinner animation='border' variant='warning'></Spinner>
                </div>
            }
        </Container>
    );
};

export default ManageProducts;