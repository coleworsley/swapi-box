import React from 'react';
import './Card.css';

const Card = ({ data, toggleFavorite, favorite }) => {
  const keys = Object.keys(data);
  const residentTable = (elem) => {
    return (
      <table className='residents'>
        <thead>
          <tr>
            <td>Residents</td>
          </tr>
        </thead>
        <tbody>
        {
          data[elem].map(item => {
            return (
              <tr>
                <td>
                  {item}
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
    )
  }

  const cardInfo = keys.map(element => {
    switch(element) {
      case 'residents':
        return residentTable(element);
      case 'name':
      case 'favorite':
        return null;
      default:
        return  <p className='card-info'>
                  <span className='subject'>{element}: </span>
                  {data[element]}
                </p>
      }
  });

  return (
    <div
      className={`card ${favorite ? 'favorite' : ''}`}
      id={data.name}>
      <div className='card-title'>
        <h3 className='card-title-text'>{data.name}</h3>
      </div>

      {cardInfo}

      <button
        className='card-favorite-button'
        onClick={(e)=>toggleFavorite(e)}>{favorite ? 'Unfavorite' : 'Favorite'}</button>
    </div>
  )
}

export default Card;
