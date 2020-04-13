import React  from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const NavigationBar = () => {
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    return (
        // <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Navbar sticky="top" color="dark" expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        href="/"
                        title="Anime"
                    >
                        Anime
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    <Nav navbar>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                to="/"
                                title="Inicio"
                                tag={Link}
                            >
                                <i className="nc-icon nc-book-bookmark" /> Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                to="/categorias"
                                title="Categoria"
                                tag={Link}
                            >
                                <i className="nc-icon nc-book-bookmark" /> Categorias
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                data-placement="bottom"
                                href="https://www.facebook.com/victor.gut.q/"
                                target="_blank"
                                title="mi perfil"
                            >
                                <i className="nc-icon nc-circle-10"/>
                                <p className="d-lg-none"> Facebook</p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;