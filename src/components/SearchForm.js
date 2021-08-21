import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearch } = useGlobalContext()
  const searchValue = useRef(null)

  const handleSearch = () => {
    setSearch(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    searchValue.current.focus()
  }, [])
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input
            type='text'
            id='name'
            onChange={handleSearch}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
