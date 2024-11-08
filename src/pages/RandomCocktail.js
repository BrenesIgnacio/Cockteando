import React from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

export default function RandomCocktail() {
  const id = 'random'
  const [loading, setLoading] = React.useState(false)
  const [RandomCocktail, setRandomCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getRandomCocktail() {
      try {
        const response = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newRandomCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setRandomCocktail(newRandomCocktail)
        } else {
            setRandomCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getRandomCocktail()
  }, [id])

  if (loading) {
    return <Loading/>
  }
  if (!RandomCocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = RandomCocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title glowing-text'>The surprise drink that we have selected for you is:</h2>
        <h3 className='section-title'>{name}</h3>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}