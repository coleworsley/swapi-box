import React from 'react';
import './Nav.css'

const Nav = ({getData}) => {

  return (
    <nav>
      <button onClick={(e) => getData(e.target.textContent.toLowerCase())}>People</button>
      <button onClick={() => getData()}>Planets</button>
      <button onClick={() => getData()}>Vehicles</button>
      <button onClick={() => getData()}>Favorites</button>
    </nav>
  )
}

export default Nav;
