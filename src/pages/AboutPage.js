import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col sm={10} md={8} lg={8}>
                        <p>
                            Can I get a heeeeeeell yeaaaaah?
                        </p>
                        <p>
                            heeeeeeell yeaaaaah!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default AboutPage;