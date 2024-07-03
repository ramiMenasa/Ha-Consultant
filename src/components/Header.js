import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="dark " expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >
            <Link to="/" className="text-white text-decoration-none">HA Consulting</Link>
            {/* <img
                src={require("../assets/whitaLogo.jpeg")}
                className="img-fluid"
                style={{width:200 , height:35}}
                alt=""
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Link className="nav-link fs-5 mt-2" to={'/'}>
                Home
              </Link>
              <Link className="nav-link fs-5 mt-2" to={'/about'}>
                About
              </Link>
              <NavDropdown className="nav-link fs-5" title="Products">
                <Link className="dropdown-item" to="#product1">
                  product1
                </Link>
                <Link className="dropdown-item" to="#product1">
                  product1
                </Link>
                <Link className="dropdown-item" to="#product1">
                  product1
                </Link>
              </NavDropdown>
              <Link className="nav-link fs-5 mt-2" to="/services">
                Services
              </Link>
              <Link className="nav-link fs-5 mt-2" to="/projects">
                Projects
              </Link>
              <Link className="nav-link fs-5 mt-2" to="/partners">
                Partners
              </Link>
              <Link className="nav-link fs-5 mt-2" to="/news">
                News
              </Link>
              <Link className="nav-link fs-5 mt-2" to="/contact">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
