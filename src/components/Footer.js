import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

function Footer() {

    return(
        <footer className="bg-colour">
            <Container fluid={true}>
                <Row className="justify-content-between p-3">
                    <Col className="p-0 hero-colour" md={3} sm={12}>
                        <a href="https://github.com/aimhus/Portfolio-Website" className="hero-colour">View Source Code</a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end hero-colour" md={3}>
                        Created by Aiman Hussaini
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;