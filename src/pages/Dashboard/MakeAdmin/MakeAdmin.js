import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import swal from "sweetalert";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    //get Input value
    const handleOnBlur = (e) => {
        const value = e.target.value;
        setEmail(value);
    };
    //handle admin submit
    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch("https://fashion-shop-server.vercel.app/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    swal(
                        "Good job!",
                        "Admin Made Successfully Done!",
                        "success"
                    );
                }
            });

        e.preventDefault();
    };
    return (
        <Container>
            <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <h4 className="">Make a User Admin</h4>
                    <form onSubmit={handleAdminSubmit}>
                        <Row>
                            <Col>
                                <input
                                    onBlur={handleOnBlur}
                                    placeholder="Email"
                                    className="w-100 form-control mb-3"
                                />
                            </Col>
                        </Row>
                        <Button className="login-button" type="submit">
                            Make an Admin
                        </Button>
                    </form>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;
