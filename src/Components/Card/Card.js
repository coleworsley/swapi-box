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
    case 'residents':
    console.log("working")
    console.log(data[element])
      return (
        <div>
          <p>Residents</p>
          {
            data[element].map((item, index )=> {
              return (
                <p>{item}</p>
              )
            })
          }
        </div>

      )


    case 'name':
    case 'favorite':
      return null;
    default:
      return  <p>{element}: {data[element]}</p>
    }



})

  return (
    <div>
      <h3>{data.name}</h3>
      {cardInfo}
      <button>FAVORITEASS</button>
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
