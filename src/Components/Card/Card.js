import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  const keys = Object.keys(data)
  const cardInfo = keys.map((element, i) => {
  switch(element) {
    case 'residents':
      return (
        <table className='residents'>
          <thead>
            <tr>Residents</tr>
          </thead>
          <tbody>

          {
            data[element].map((item, index )=> {
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
    case 'name':
    case 'favorite':
      return null;
    default:
      return  <p className='card-info'>{element}: {data[element]}</p>
    }
})

  return (
    <div className='card'>
      <h3 className='card-title'>{data.name}</h3>
      {cardInfo}
      <button className='card-favorite-button'>Favorite</button>
    </div>
  )
}

export default Card;
