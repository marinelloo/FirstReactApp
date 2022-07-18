import React from 'react';
import './SingleCard.css'

const SingleCard = ({card, handleChoice, flipped}) => {
    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card-item">
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} alt="cat" className="front"/>
                <img src="/img/cover.jpeg"
                     className="back"
                     onClick={handleClick}/>
            </div>
        </div>
    );
};

export default SingleCard;