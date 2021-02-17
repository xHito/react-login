import { React, useState } from 'react';
import '../card.css';

function Card({ title, imgUrl, content }) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={imgUrl} alt='1' />
            </div>
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card;
