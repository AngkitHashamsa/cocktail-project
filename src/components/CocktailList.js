import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cocktail } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktail.length < 1) {
    return (
      <section className='section '>
        <h2 className='section-title'>no search term match</h2>
      </section>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center '>
        {cocktail.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
