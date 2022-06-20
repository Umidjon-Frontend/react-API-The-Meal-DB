import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";


function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="category-item">
      <img src={strCategoryThumb} alt="" />
      <b>{strCategory}</b>
      <p>{strCategoryDescription.slice(0, 60)}...</p>
      <Link to={`/category/${strCategory}`} className="btn">Watch Category</Link>
    </div>
  );
}

export default CategoryItem;
