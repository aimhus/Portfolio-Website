import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Card from '../components/Card';
import { animateScroll as scroll } from 'react-scroll';

import rover from '../assets/rover.png';
import AppFullSC1 from '../assets/AppFullSC1.png';
import PCBbrd1 from '../assets/PCBbrd1.png';
import fpgaSch1R from '../assets/fpgaSch1R.png';
import BankCode from '../assets/BankCode.png';
import iotCard2 from '../assets/iotCard2.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'R3 Mars Rover',
                    subTitle: 'Autonomous and GPS Systems',
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 1730
                },
                {
                    id: 1,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: AppFullSC1,
                    selected: false,
                    clicked: false,
                    position: 3800
                },
                {
                    id: 2,
                    title: 'Audio Amplifier',
                    subTitle: 'PCB Design and Creation',
                    imgSrc: PCBbrd1,
                    selected: false,
                    clicked: false,
                    position: 6000
                },
                {
                    id: 3,
                    title: 'General Purpose Processor',
                    subTitle: 'Design, Schematics and Implementation',
                    imgSrc: fpgaSch1R,
                    selected: false,
                    clicked: false,
                    position: 7950
                },
                {
                    id: 4,
                    title: 'Banking Simulation',
                    subTitle: 'Management Tool for Admins and Customers',
                    imgSrc: BankCode,
                    selected: false,
                    clicked: false,
                    position: 10110
                },
                {
                    id: 5,
                    title: 'Home Automation System',
                    subTitle: 'Arduino and IoT',
                    imgSrc: iotCard2,
                    selected: false,
                    clicked: false,
                    position: 12200
                },
            ]
        }
        
    }

    handleMouseOver = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    

    handleClick = (id, card, scrollPos) => {

        scroll.scrollTo(scrollPos, {
            duration: 2000,
            delay: 50,
            smooth: 'easeInOutCubic',
            offset: 0,
            activeClass: true,
        });

    }


    makeItems = (items, limit_low, limit_high) => {
        return items.map(item => {
            if(item.id >= limit_low && item.id < limit_high) {
                return <Card item={item} mouseover={(e => this.handleMouseOver(item.id, e))} key={item.id} onClick={(e => this.handleClick(item.id, e, item.position))} />
            }
        });
    }

    
    render() {
        return(
            <Container fluid={true}>
                <Col>
                    <Row className="justify-content-around">
                            {this.makeItems(this.state.items, 0, 3)}
                    </Row>
                    <Row className="justify-content-around">
                            {this.makeItems(this.state.items, 3, 6)}
                    </Row>
                </Col>
            </Container>
        );
    }

}

export default Carousel;