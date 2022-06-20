import React from "react";
import CategoryItem from "./CategoryItem";
import "./CategoryList.css";

function CategoryList({ catalog = [] }) {
  return (
    <div className="category-list">
      {catalog.map((el) => {
        return <CategoryItem key={el.idCategory} {...el} />;
      })}
    </div>
  );
}

export default CategoryList;
