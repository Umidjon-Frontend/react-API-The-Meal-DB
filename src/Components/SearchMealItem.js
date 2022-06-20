import React from 'react'
import { Link } from 'react-router-dom'

function SearchMealItem({recipe}) {
  return (
    <div className="recipe">
      <div className="container">
        <div className="recipe-item">
        <Link className="btn" to="/">Go Home</Link>
        <br />
        <br />
          <div className="repicte__img">
            <img src={recipe[0].strMealThumb} alt={recipe[0].idMeal} />
          </div>
          <h1>
            <b>Meal Name: </b>
            {recipe[0].strMeal}
          </h1>
          <h2>Meal Category: {recipe[0].strCategory}</h2>
          {recipe[0].strArea ? <h4>Meal Area: {recipe[0].strArea}</h4> : null}
          <p>
            <b>Instrcutions</b> <br />
            {recipe[0].strInstructions}
          </p>
          <h4>Meal Youtube</h4>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${recipe[0].strYoutube.slice(
              -11
            )}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  )
}

export default SearchMealItem