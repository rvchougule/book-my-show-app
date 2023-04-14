import React from 'react'
import MovieNavbar from '../component/Navbar/MovieNavbar.Component'

const MovielayoutHOC = 
(Component) =>
({...props}) => {
  return (
    <div>
      <MovieNavbar />
      <Component {...props} />
      <div>Footer</div>
    </div>
  )
}

export default MovielayoutHOC