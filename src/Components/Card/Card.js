import React from 'react';
import './Card.css';

const Card = ({data}) => {
  console.log(data)
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.homeworld.name}</p>
      <p>Language</p>
      <p>{data.homeworld.population}</p>
      <button>Favorite</button>
    </div>
  )
}

export default Card;
