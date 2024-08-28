import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='text-white  font-bold'>
      <h1>Page Not found </h1>
        <Link to={'/'}>Go home</Link>
    </div>
  )
}

export default NotFoundPage
