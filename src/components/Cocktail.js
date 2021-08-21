import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, image, info, name, glass }) => {
  return (
    <article className='cocktail'>
      <img src={image} alt={name} />
      <footer className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{info}</h4>
        <p>{glass}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary'>
          details
        </Link>
      </footer>
    </article>
  )
}

export default Cocktail
