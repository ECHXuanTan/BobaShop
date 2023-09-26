import React from 'react'
import {Container,Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
      <header>
        <Navbar bg='dark' variant='dark' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">BobaShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Giỏ hàng</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Đăng nhập</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Header
