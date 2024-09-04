import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='align-element py-20'>
      <nav>navbar</nav>
      <Outlet /> <Link to='/CartItem'>CartItem</Link>
      <footer>footer</footer>
    </div>
  )
}

export default HomePage
