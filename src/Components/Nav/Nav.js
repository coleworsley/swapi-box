import React from 'react';
import './Nav.css'

const Nav = ({getData}) => {

  return (
    <nav>
      <button id='people-button'
              onClick={(e) => getData(e)}>People</button>

      <button id='planets-button'
              onClick={(e) => getData(e)}>Planets</button>

      <button id='vehicles-button'
              onClick={(e) => getData(e)}>Vehicles</button>

      <button id='favorite-button'
              ref='favorite-button'
              onClick={(e) => getData(e)}>Favorites</button>
    </nav>
  )
}

export default Nav;
