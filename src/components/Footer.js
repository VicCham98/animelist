import React from 'react';
import { Row, Container } from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <nav className="footer-nav">
                        <ul>
                            <li>
                                <a
                                    href="https://presentation-me.herokuapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Victor Chambilla
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" React "}
                <i className="fa fa-heart heart" /> by Victor Chambilla
            </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;