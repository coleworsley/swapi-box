import React from 'react';
import './Nav.css'

const Nav = ({getData, activeCard}) => {
  return (
    <nav>
      <div className='title-box'>
        <h1 className='title'>SWAPI-BOX</h1>
      </div>
      <div className={`button-container ${activeCard.toLowerCase()}`}>
        <button className='people-button'
          onClick={(e) => getData(e)}>People
        </button>

        <button className='planets-button'
          onClick={(e) => getData(e)}>Planets
        </button>

        <button className='vehicles-button'
          onClick={(e) => getData(e)}>Vehicles
        </button>

        <button className='favorites-button'
          onClick={(e) => getData(e)}>Favorites
        </button>
      </div>
    </nav>
  )
}

export default Nav;
