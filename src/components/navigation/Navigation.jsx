import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { isLoggedIn, handleLogout } from '../checklogin/authUtils';
import "./navigation.css";
import { FaCaretDown, FaUser, FaUserAlt } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';


function redirectToProfile() {
  window.location.href = "/profile";
}

function redirectToUpdate() {
  window.location.href = "/update";
}

function redirectToExpert(){
  window.location.href = "/expert";
}

function redirectToSession(){
  window.location.href = "/session";
}

function redirectToHome(){
  window.location.href = "/";
}



function Navigation() {
  return (
    <div className='navigation-bar'>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <div className="brand-container">
            <Navbar.Brand className='topmate-curser' onClick={redirectToHome}>stokemate</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navlink" onClick={redirectToExpert}>Expert</Nav.Link>
              <Nav.Link className="navlink" onClick={redirectToSession}>Sessions</Nav.Link>
            </Nav>
            <Nav>
            {!isLoggedIn() ? (
                <>
                  <Nav.Link href="/login">
                    <Button variant="outline-info">Login</Button>
                  </Nav.Link>
                  <Nav.Link href="/signup">
                    <Button className="signup-button" variant="dark">Sign Up</Button>
                  </Nav.Link>
                </>
              ) : (
                <div className="user-profile">
                    <FaUserAlt />
                    <Dropdown className="icon">
                      <Dropdown.Toggle className='dropdownlink' variant="link" id="dropdown-basic">
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className='profile-links' onClick={redirectToProfile}>Profile</Dropdown.Item>
                        <Dropdown.Item className='profile-links' onClick={redirectToUpdate}>Update</Dropdown.Item>
                        <Dropdown.Item className='profile-links' onClick={handleLogout}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
