import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.homeworld}</p>
      <p>{data.language}</p>
      <p>{data.population}</p>
      <button>Favorite</button>
    </div>
  )
}


/*
Planet Cards:
  name
  Terrain
  population
  Climate
  Residents
  button

Vehicle Cards
  name
  model
  class
  number of passengers
  button
*/

export default Card;
