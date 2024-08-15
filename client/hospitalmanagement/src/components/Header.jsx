import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    console.log('Header component rendered');
  return (
    <div>
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
            <Link to={'/'}><i className="fa-solid fa-house-medical" size="2xl" style={{color: "#ed072a",}}  /></Link>
              {' '}
              HOSPITAL MANAGEMENT APP
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header