import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  const keys = Object.keys(data)
  const cardInfo = keys.map((element, i) => {
  //   if (element.constructor === Array) {
  //     return element.map(item => <p>{item}</p>)
  //   }
  //   else if (element === 'name') {
  //     return <h3>{element}:{data[element]}</h3>
  //   }
  //   else if (element === 'favorite') {
  //     return <button>OMG FAVORITE!!!</button>
  //   }
  //   else return(
  //     <p>{element}:{data[element]}</p>
  //   )

  switch(element) {
    case element.construct === Array:
      return element.map(item => <p>{item}</p>);
    case === 'name':
    case === 'favorite':
      return null;
    default:
      return  <p>{element}: {data[element]}</p>
    }



})

  return (
    <div>
      {cardInfo}
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
