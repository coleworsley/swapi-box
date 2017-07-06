import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({cardData}) => {
const cards = cardData.length > 0 ? cardData.map(e => {
  return <Card data={e}/>
}) : null

  return (
    <section>
      {cards}
    </section>
  )
}

export default CardContainer;
