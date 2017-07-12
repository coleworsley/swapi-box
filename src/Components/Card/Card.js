import React from 'react';
import './Card.css';

const Card = ({ data, toggleFavorite, favorite }) => {
  const keys = Object.keys(data);
  const residents = (elem, i) => {
    return (
      <p className='card-info'
         key={data[elem] + i}>
         <span className='subject'>Residents: </span>
         {data[elem].length ? data[elem].join(', ') : 'None'}
       </p>
    )
  }

  const cardInfo = keys.map((element, index) => {
    switch(element) {
      case 'residents':
        return residents(element);
      case 'name':
      case 'favorite':
        return null;
      default:
        return <p className='card-info' key={element + index}>
                 <span className='subject'>{element}: </span>
                 {data[element]}
               </p>
      }
  });

  return (
    <div className={`card ${favorite ? 'favorite' : ''}`}
        id={data.name}>

      <div className='card-title'>
        <h3 className='card-title-text'>{data.name}</h3>
      </div>
      <div className="card-info-container">
        {cardInfo}
      </div>

      <button
        className='card-favorite-button'
        onClick={(e)=>toggleFavorite(e)}>{favorite ? 'Unfavorite' : 'Favorite'}</button>
    </div>
  )
}

export default Card;
