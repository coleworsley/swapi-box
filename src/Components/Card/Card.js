import React from 'react';
import './Card.css';

const Card = ({ data, toggleFavorite, favorite }) => {
  const keys = Object.keys(data);
  const residents = (elem, i) => {
    return (
      <tr className='card-info' key={data[elem] + i}>
        <td className='subject'>Residents:</td>
        <td className='material'>{data[elem].length ? data[elem].join(', ') : 'None'}</td>
      </tr>
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
        return (
          <tr className='card-info' key={element + index}>
            <td className='subject'>{element}:</td>
            <td className='material'>{data[element]}</td>
          </tr>
        )
      }
  });

  return (
    <div className={`card ${favorite ? 'favorite' : ''}`}
        id={data.name}>

      <div className='card-title'>
        <h3 className='card-title-text'>{data.name}</h3>
      </div>
      <div className="card-info-container">
        <table>
          <tbody>
            {cardInfo}
          </tbody>
        </table>
      </div>

      <button
        className='card-favorite-button'
        onClick={(e)=>toggleFavorite(e)}>{favorite ? 'Unfavorite' : 'Favorite'}</button>
    </div>
  )
}

export default Card;
