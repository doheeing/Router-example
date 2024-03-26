import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()
    const gotoProductPage = () =>{
        navigate('/products?q=pants')
    }
  return (
    <div>
      <h1>Homepages</h1>
      <Link to="/about">Go to About page</Link> 
      <button onClick={gotoProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage
