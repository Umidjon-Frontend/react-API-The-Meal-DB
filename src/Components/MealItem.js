import React from 'react'
import { Link } from 'react-router-dom'
import './MealItem.css'

function MealItem(props) {
  const {strMeal, strMealThumb, idMeal} = props
  return (
    <div className="category-item">
      <img src={strMealThumb} alt={strMeal} />
      <br />
      <b>{strMeal}</b>
      <br />
      <Link to={`/meal/${idMeal}`} className="btn">Watch Recipe</Link>
    </div>
  )
}

export default MealItem