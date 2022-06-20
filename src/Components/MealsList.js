import React from "react";
import MealItem from "./MealItem";
import "./MealsList.css";

function MealsList({ meals }) {
  return (
    <div className="meals-list">
      {meals.map((meal) => (
        <MealItem key={meals.idMeal} {...meal} />
      ))}
    </div>
  );
}

export default MealsList;
