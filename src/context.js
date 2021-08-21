import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState([])
  const [search, setSearch] = useState('a')

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${search}`)
      const data = await response.json()
      const { drinks } = data

      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const { idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            image: strDrinkThumb,
            glass: strGlass,
          }
        })
        setCocktail(newDrinks)
        setLoading(false)
      } else {
        setCocktail([])
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [search])
  useEffect(() => {
    fetchDrinks()
  }, [search, fetchDrinks])

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktail,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
