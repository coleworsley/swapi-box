import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardData, toggleFavorite, favoritesArray, active }) => {
const cards = cardData.length > 0 ?
              cardData.map(e => {

                return <Card data={e}
                             key={e.name}
                             toggleFavorite={toggleFavorite}
                             favorite={favoritesArray.includes(e)}/>
              }) : null;

  return (
    <section className='card-container'>
      {cards}
    </section>
  )
}

export default CardContainer;
