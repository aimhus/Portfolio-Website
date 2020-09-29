import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import rover from '../assets/rover.png';
import Card from '../components/Card';

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
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
                {
                    id: 3,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
                {
                    id: 4,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
                {
                    id: 5,
                    title: 'Note Taking App',
                    subTitle: 'All-in-one organizational tool',
                    imgSrc: rover,
                   // gitLink: ,
                   // link: ,
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
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


    makeItems = (items, limit_low, limit_high) => {
        return items.map(item => {
            if(item.id >= limit_low && item.id < limit_high) {
                return <Card item={item} mouseover={(e => this.handleCardClick(item.id, e))} key={item.id} />
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