import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data.drinks) {
          const {
            strDrink: name,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instruction,
            strDrinkThumb: image,
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
          const newCocktail = {
            name,
            image,
            category,
            glass,
            instruction,
            info,
            ingredients,
          }
          setCocktail(newCocktail)
          setLoading(false)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  console.log(cocktail)

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const { name, image, category, glass, instruction, info, ingredients } =
      cocktail
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h3 className='section-title'>{name}</h3>
        <div className='drink '>
          <img src={image} alt={name} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name:</span>
              {name}
            </p>
            <p>
              <span className='drink-data'>category:</span>
              {category}
            </p>
            <p>
              <span className='drink-data'>info:</span>
              {info}
            </p>
            <p>
              <span className='drink-data'>glass:</span>
              {glass}
            </p>
            <p>
              <span className='drink-data'>instruction:</span>
              {instruction}
            </p>
            <p>
              <span className='drink-data'>ingredients:</span>
              {ingredients.map((item) => {
                return item ? item : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
