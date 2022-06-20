import React, { useEffect, useState } from "react";
import "./SearchMeal.css";
import { useParams } from "react-router-dom";
import { getSearchMealByName } from "../api";
import Loader from "./Loader";
import SearchMealItem from "./SearchMealItem";

function SearchMeal() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getSearchMealByName(name).then((data) => setRecipe(data.meals));
  }, [name]);

  return (
    <div>
      {!recipe.length ? <Loader/> : <SearchMealItem recipe={recipe}/>}
    </div>
  );
}

export default SearchMeal;
