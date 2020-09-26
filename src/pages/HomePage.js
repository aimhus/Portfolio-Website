import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';

import R3LogoBlack from '../assets/R3LogoBlack.jpg';
//import Card from '../components/Card';
//import roverThumb from '../assets/rover.png'
//import { Row, Col, Container } from 'react-bootstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel />
            <InfoSection bgImg={R3LogoBlack} img1={R3LogoBlack}/>
            <InfoSection bgImg={R3LogoBlack} img1={R3LogoBlack}/>
        </div>
    );

}

export default HomePage;