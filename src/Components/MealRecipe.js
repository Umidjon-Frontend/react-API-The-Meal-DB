import React, { useEffect, useState } from "react";
import "./MealRecipe.css";
import { getMealByID } from "../api";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Recipe from "./Recipe";

function MealRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getMealByID(id).then((data) => setRecipe(data.meals));
  }, [recipe]);

  return (
    <div className="meal-recipe">
      {!recipe.length ? <Loader /> : <Recipe recipe={recipe} />}
    </div>
  );
}

export default MealRecipe;
