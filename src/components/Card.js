import React from 'react';
import CardInfo from '../components/CardInfo';

function Card(props) {

    return(
        <div className="d-inline-block p-card" onMouseOver={(e) => props.mouseover(props.item)} onClick={(e) => props.onClick(props.item)}>
            <img className="p-card-image" src={props.item.imgSrc} alt={props.item.title} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} />} 
        </div>
    );

}

export default Card;