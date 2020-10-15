import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../components/Hero';

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume.png';
import ResumeDoc from '../assets/Resume2020.pdf';

function AboutPage(props) {

    return(
        <div className="bg-colour">
            <Hero title={props.title} />
            <Container fluid={true} style={{paddingBlock: 75}}>
                <Row className="justify-content-center">
                    <Col sm={10} md={8} lg={8} >
                        <p className="hero-colour about-text">
                            Hey there! I'm Aiman Hussaini! I'm currently pursuing my 
                            my Bachelor's degree in Computer Engineering. I created this 
                            website to give myself some more room to talk about my projects, 
                            things that excite me, and areas I want to learn more about.
                        </p>
                        <p className="hero-colour about-text">
                            In case the nature of my projects didn't make it super 
                            obvious, I'm really interested in technology. On a practical level, 
                            I love exploring interactive forms of communication; mediums where everyone 
                            appears to see the same thing but can take away totally different experiences. 
                            This passion extends into my hobbies beyond programming — 
                            I enjoy video game design, directing films and reading novels for the same 
                            fundamental reason.
                        </p>
                        <p className="hero-colour about-text">
                            Career-wise, I have a lot of fields I want to explore while I can. I have a special 
                            interest in back-end development, ensuring all processes behind the scenes are running 
                            smoothly. I also really enjoy chip architecture and design. I've always looked up to the
                            people who design cutting edge new technologies like the 7nm design process in Intel and AMD's 
                            upcoming CPUs, and the refined use of Tensor Cores in Nvidia's RTX 30 series GPUs. Finally, I also 
                            really enjoy the robotics industry, and my experience with R3 has given me a newfound fascination 
                            with autonomy and machine learning.
                        </p>
                        <p className="hero-colour about-text">
                            I hope you'll check back on this website from time to time as I explore new avenues and 
                            update my experiences. You can follow my progress in the following places:
                        </p>
                        <Row className="justify-content-around" style={{paddingTop: 29}}>
                            <a href="https://github.com/aimhus" target="blank" lg={1} md={1} sm={2}>
                                <img src={github} alt="" style={{height: 75, width: 'auto'}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/aimanhus/" target="blank" lg={1} md={1} sm={2} >
                                <img src={linkedin} alt="" style={{height: 75, width: 75}}/>
                            </a>
                            <a href={ResumeDoc} target="blank" lg={1} md={1} sm={2} >
                                <img src={resume} alt="" style={{height: 75, width: 75}}/>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default AboutPage;