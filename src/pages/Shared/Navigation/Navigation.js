import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className=''>
                    <Navbar.Brand className='fw-bold' to="/home">FASHION SHOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <NavLink className='nav-item' to="/home">Home</NavLink>
                            <NavLink className='nav-item' to="/about">About</NavLink>
                            <NavLink className='nav-item' to="/shop">Shop</NavLink>
                            <NavLink className='nav-item' to="/blogs">Blogs</NavLink>
                            <NavLink className='nav-item' to="/contact">Contact</NavLink>
                            {user.displayName && <NavLink className='nav-item' to="/dashboard">Dashboard</NavLink>}
                            {
                                !user.displayName && <NavLink className='nav-item login' to="/login">Log In</NavLink>
                            }
                            {
                                user.displayName && <><NavLink className='name' to="">Hello, {user.displayName}</NavLink>
                                    <NavLink className='nav-item login' onClick={logOut} to="">Log Out</NavLink></>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;