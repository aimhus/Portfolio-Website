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
                        <Col style={pStyleRight} lg={8} sm={12} md={12} xl={8}>
                            <p style={textStyle}>{txt1p1}<br></br><br></br>{txt1p2}</p>
                        </Col>
                        <Col lg={4} sm={12} md={12} xl={4}>
                            <img className="" src={props.img1} style={imgStyleRight} alt=""/>
                        </Col>
                    </Row>

                    <Row style={{paddingBottom: 75}}>
                        <Col lg={4} sm={12} md={12}>
                            <img className="" src={props.img2} style={imgStyleLeft} alt="" />
                        </Col>
                        <Col style={pStyleLeft} lg={8} sm={12} md={12}>
                            <p style={textStyle}>{txt2p1}<br></br><br></br>{txt2p2}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={pStyleRight} lg={8} sm={12} md={12}>
                            <p style={textStyle}>{txt3p1}<br></br><br></br>{txt3p2}<a href={link}>{linkText}</a></p>
                        </Col>
                        <Col lg={4} sm={12} md={12}>
                            <img className="" src={props.img3} style={imgStyleRight} alt=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Parallax>
        </div>
    );

}

export default InfoSection;