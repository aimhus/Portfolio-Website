import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import InfoSection from '../components/InfoSection';

import R3LogoBlack from '../assets/R3LogoBlack.jpg';
import movement1 from '../assets/movement1.gif';
import utah1 from '../assets/utah1.jpg';
import utah2 from '../assets/utah2.jpg';
import flutter1 from '../assets/flutter1.jpg';
import flutter1cropped from '../assets/flutter1cropped.jpg';
import flutter2 from '../assets/flutter2.png';
//import Card from '../components/Card';
//import roverThumb from '../assets/rover.png'
//import { Row, Col, Container } from 'react-bootstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Carousel />
            <InfoSection 
            bgImg={utah1} 
            img1={R3LogoBlack} 
            txt1p1="As the leader of the autonomous functions and GPS teams for the Ryerson Rams Robotics, I've had the chance to collaborate with some very driven people to create intelligent systems and spark a passion for robotics."
            txt1p2="The challenges we have faced in designing and adapting to new situations have been tough and rewarding, giving us the opportunity to innovate new solutions and work together more cohesively."
            img2={movement1} 
            txt2p1="Due to the arrival of COVID-19, we have had to adapt our plans going forward on the fly. In order to compensate for the lost access to our rover, we created multiple simulations to reproduce the movements and data outputs needed to perform testing."
            txt2p2="We created data generators that mimiced realistic rover movements and sensor data to develop our pathfinding algorithms. Having to manually account for all possible situations gave us a deeper understanding of what was needed and in turn helped us create more efficient pathfinding algorithms."
            img3={movement1}
            txt3p1="Placeholder"
            txt3p2="Placeholder"
            link=""
            linkText=""
            />
            <InfoSection 
            bgImg={flutter2} 
            img1={R3LogoBlack} 
            txt1p1="In my committment to becoming more organized, I found there to be a lack of resources that truly gave me the control I wanted from my note taking apps. I decided to create <Insert App Name Here> because I wanted to cater to users like me — people who want a clean UI combined with ultimate customizability."
            txt1p2="<Insert Name Here> puts the power back into the hands of the user. After first focusing on maintaining an easy-to-use design scheme, my ultimate goals are to enable fully customizable notifications, reminders, calendar integrations and more. After all, who knows how you stay organized better than yourself?"
            img2={movement1} 
            txt2p1="Although I'm most comfortable with Java, I decided to push myself and explore other avenues for the development of this app. I settled on using Flutter, Google's open-source SDK built for Dart. I appreciate the flexibility it gives me to experiement with Material UI and different backend solutions."
            txt2p2="Something about SQLite and technical things here."
            img3={movement1}
            txt3p1="Being one of my first real forays in front-end development, I have learned a lot of valuable lessons in working on this project. It helped me realize the importance of fluid design that works intuitively for the user. Alongside customizability, I am committed to providing options to improve the accessibility of the app, from visual contrast to design overhauls. I appreciate all feedback so that I can make <Name Here> an organizational tool for everyone."
            txt3p2="This app is still a work in progress. I have some more development to do before deployment and lots of ideas for new features post-release! I hope you'll follow along its development as I continue to improve the design and experience. You can view the source code for the project "
            link="https://github.com/aimhus/Portfolio-Website"
            linkText="here. (Change link)"
            />
        </div>
    );

}

export default HomePage;