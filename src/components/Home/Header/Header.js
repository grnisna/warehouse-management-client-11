import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Login/Login/firebase/firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">CATHODIC HOUSE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#"></Nav.Link>
                        <Nav.Link href="#"></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        {
                            user?
                            <>
                            <Nav.Link as={Link} to="/manage">Manage Items</Nav.Link>
                            <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                            <button onClick={handleSignOut}>LogOut</button>
                            </>
                            
                            :
                            <Nav.Link eventKey={2}as={Link} to='/login'>
                                Login
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;