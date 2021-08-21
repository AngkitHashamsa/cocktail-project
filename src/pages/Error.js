import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <div className='error-container'>
        <h2 className='section-title'>Opps!! error page</h2>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </div>
  )
}

export default Error
