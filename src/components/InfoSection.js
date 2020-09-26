import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Row, Col } from 'react-bootstrap';

function InfoSection(props) {

    const imgStyle = {
        height: 500,
        width: 500,
        marginLeft: 300,
        marginTop: 50,
        borderRadius: 25,
       // transform: 'translate(-1000%, 1000%)',
    }

    const textStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 28,
    }

    return(
        <div style={{marginTop: 90}}>
            <Parallax
                blur={10}
                bgImage={props.bgImg}
                bgImageAlt="the cat"
                strength={700}
            >
            <div style={{height: 1000}} >
                <Col>
                    <Row>
                        <Col>
                            <img className="" src={props.img1} style={imgStyle} />
                        </Col>
                        <Col style={{paddingRight: 50, paddingTop: 75, width: 100, height: 300}}>
                            <p style={textStyle}>Text Text Text TextTex tTe xtTe xtText Text Text TextTe xtTextT extText TextText</p>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Parallax>
        </div>
    );

}

export default InfoSection;