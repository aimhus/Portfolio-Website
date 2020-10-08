import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import rover from '../assets/rover.png';
import Card from '../components/Card';
import { animateScroll as scroll } from 'react-scroll';

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
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 3665
                },
                {
                    id: 2,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 5605
                },
                {
                    id: 3,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 7545
                },
                {
                    id: 4,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 9490
                },
                {
                    id: 5,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                    selected: false,
                    clicked: false,
                    position: 11425
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
        

        const scrollOptions = {
            smooth: 'easeInOutBounce'
        }

        scroll.scrollTo(scrollPos, {
            duration: 1500,
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