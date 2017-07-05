import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({cardData}) => {
  console.log(cardData)
const cards = cardData.peopleData ? cardData.peopleData.map(e => {
  return <Card data={e}/>
}) : null

  return (
    <section>
      {cards}
    </section>
  )
}

export default CardContainer;
