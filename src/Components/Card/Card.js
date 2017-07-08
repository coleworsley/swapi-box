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
        return  <p className='card-info'>{element}: {data[element]}</p>
      }
  });

  return (
    <div className={`card ${favorite ? 'favorite' : ''}`}
         id={data.name}>
      <h3 className='card-title'>{data.name}</h3>
      {cardInfo}
      <button className='card-favorite-button'
              onClick={(e)=>toggleFavorite(e)}>Favorite</button>
    </div>
  )
}

export default Card;
