import React from 'react';
import {useSpring, animated} from 'react-spring';


function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0} });

    return(
        <animated.div className="p-card-info hero-colour" style={style}>
            <p className="p-card-title">{props.title}</p>
            <p className="p-card-subtitle">{props.subTitle} </p>
            <p className="p-card-clickPrompt">Click image for more info</p>
        </animated.div>
    );

}

export default CardInfo;