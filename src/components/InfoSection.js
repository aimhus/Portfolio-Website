import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';

function InfoSection(props) {

    const imgStyleRight = {
        height: 500,
        width: 500,
        //marginRight: 30,
       // marginTop: 50,
        borderRadius: 25,
        marginLeft: 30,
    }

    const imgStyleLeft = {
        height: 500,
        width: 500,
       // marginLeft: 75,
        //marginTop: 50,
        borderRadius: 25,
    }

    const pStyleRight = {
       // paddingLeft: 400,
       // paddingTop: 75, 
    }
    
    const pStyleLeft = {
       // paddingRight: 100,
       // paddingTop: 75, 
        //paddingLeft: 35
    }

    const textStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20,
      //  width: 800
    }

    const txt1p1 = props.txt1p1;
    const txt1p2 = props.txt1p2;
    const txt2p1 = props.txt2p1;
    const txt2p2 = props.txt2p2;
    const txt3p1 = props.txt3p1;
    const txt3p2 = props.txt3p2;
    const linkText = props.linkText;
    const link = props.link;

    return(
        <div style={{marginTop: 90}}>
            <Parallax
                blur={10}
                bgImage={props.bgImg}
                bgImageAlt=""
                strength={700}
            >
            <div fluid={true} style={{paddingBottom: 100, paddingTop: 100, paddingLeft: 50, paddingRight: 50}} >
                <Container fluid>
                    <Row style={{paddingBottom: 75}}>
                        <Col className="responsive-text" lg={8} sm={12} md={12} xl={8} xs={12}>
                            <p style={textStyle}>{txt1p1}<br></br><br></br>{txt1p2}</p>
                        </Col>
                        <Col className="align-self-center" lg={4} sm={12} md={12} xl={4}>
                            <img className="responsive-img" src={props.img1} alt=""/>
                        </Col>
                    </Row>

                    <Row style={{paddingBottom: 75}}>
                        <Col className="align-self-center" lg={4} sm={12} md={12}>
                            <img className="responsive-img" src={props.img2} alt="" />
                        </Col>
                        <Col className="responsive-text" lg={8} sm={12} md={12}>
                            <p style={textStyle}>{txt2p1}<br></br><br></br>{txt2p2}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="responsive-text" lg={8} sm={12} md={12}>
                            <p style={textStyle}>{txt3p1}<br></br><br></br>{txt3p2}<a href={link} target="blank">{linkText}</a></p>
                        </Col>
                        <Col className="align-self-center" lg={4} sm={12} md={12}>
                            <img className="responsive-img" src={props.img3} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Parallax>
        </div>
    );

}

export default InfoSection;