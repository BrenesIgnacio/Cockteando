import React from 'react'
import { Link } from 'react-router-dom'
export default function RandomCocktail({ image, name, info, glass }) {
  return (
    <article className='RandomCocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='random-cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/RandomCocktail`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}
