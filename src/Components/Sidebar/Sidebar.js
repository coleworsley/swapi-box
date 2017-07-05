import React from 'react'
import './Sidebar.css'

const Sidebar = ({films}) => {

  const randomNum =  Math.floor(Math.random()*( films.count )) || 0

  const scrollingText = () => {
    if (!films.allFilms) {
      return "Loading"
    }
    return films.allFilms[randomNum].opening_crawl
  }

  return(
    <aside className="side-bar">
    <h1>Title!!!!!!!</h1>
    <div>{scrollingText()}</div>

    </aside>
  )
}

export default Sidebar
