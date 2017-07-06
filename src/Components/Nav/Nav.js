import React from 'react';
import './Nav.css'

const Nav = ({getData}) => {


  return (
    <nav>
      <button onClick={(e) => getData(e)}>People</button>
      <button onClick={(e) => getData(e)}>Planets</button>
      <button onClick={(e) => getData(e)}>Vehicles</button>
      <button onClick={(e) => getData(e)}>Favorites</button>
    </nav>
  )
}

export default Nav;
