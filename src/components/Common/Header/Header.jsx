import React, { useState } from 'react'
import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {

    const [open, setOpen] = useState(false);


    const toggleMenu =()=>{
        setOpen(!open)
    }
  return (
    <section className='header-section'>
        <Container>
            <Row>
                <Navbar  expand="lg" className="bg-body-tertiary mb-3">
          {/* Logo Section*/}
            <Navbar.Brand>
                <NavLink to='/'>Weekndmonks</NavLink>
            </Navbar.Brand>
            {/* End Logo Section*/}

            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >

            {/* Mobile Logo Section*/}
              <Offcanvas.Header>
                <h1 className='logo'>Weekndmonks</h1>
                <span className='navbar-toogler ms-auto' onClick={toggleMenu}>
                    <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              {/* End Mobile Logo Section*/}
              
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">HOME</NavLink>
                  <NavLink className="nav-link" to="/">ABOUT US</NavLink>
                  <NavLink className="nav-link" to="/">TOURS</NavLink>
                  <NavDropdown
                    title="DESTINATION"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">SPAIN TOURS</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">ITALY TOURS </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">FRANCE TOURS </NavDropdown.Item>
                    
                    
                  </NavDropdown>
                  <NavLink className="nav-link" to="/">GALLERY</NavLink>
                  <NavLink className="nav-link" to="/">CONTACT</NavLink>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='ms-md-4 ms-2'>
                <NavLink className="primaryBtn d-none d-sm-inline-block">
                    Book Now
                </NavLink>
                <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
                </li>

            </div>
          
        </Navbar>
            </Row>
        </Container>
    </section>
  )
}

export default Header;