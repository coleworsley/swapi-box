import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ cardData, toggleFavorite, favoritesArray, active, loading }) => {

  const cards = cardData.length > 0 ? cardData.map(e => {
    return <Card data={e}
            key={e.name}
            toggleFavorite={toggleFavorite}
            favorite={favoritesArray.includes(e)}/>
  }) : null;

  const load = active === '' ? (
      <h3>Select a button</h3>
  ) : cards;

  return (
    <section className={`card-container ${loading ? 'loading' : ''}`}>
      {load}
    </section>
  )
}

export default CardContainer;
