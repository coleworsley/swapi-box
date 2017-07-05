import React from 'react'
import './Sidebar.css'

const Sidebar = (props) => {
  return(
    <aside className="side-bar">
    <h1>Title!!!!!!!</h1>
    <div>{props.films.count}</div>

    </aside>
  )
}

export default Sidebar
