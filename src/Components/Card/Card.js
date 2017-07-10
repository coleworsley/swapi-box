import React from 'react';
import './Card.css';

const Card = ({ data, toggleFavorite, favorite }) => {
  const keys = Object.keys(data);
  const residentTable = (elem, i) => {
    return (
      <table className='residents' key={elem.name + 'table' + i}>
        <thead>
          <tr key={elem.name + 'tr1' + i}>
            <td>Residents:</td>
          </tr>
        </thead>
        <tbody>
        {
          data[elem].map((item, j) => {
            return (
              <tr key={item + 'tr2' +j}>
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

  const cardInfo = keys.map((element, index) => {
    switch(element) {
      case 'residents':
        return residentTable(element);
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
