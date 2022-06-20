import React from "react";
import { useParams } from "react-router-dom";
import { getMealByFilterCategory } from "../api";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import MealsList from "./MealsList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(()=>{
    getMealByFilterCategory(name).then(data => setMeals(data.meals))
  }, [name])

  return (
    <div className="category">
      <div className="container">
        {!meals.length ? <Loader/> : <MealsList meals={meals}/>}
      </div>
    </div>
  );
}

export default Category;
