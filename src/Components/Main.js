import React, { useState, useEffect } from "react";
import { getMealByCategory } from "../api";
import CategoryList from "./CategoryList";
import Loader from "./Loader";
import "./Main.css";

function Main() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getMealByCategory().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <div className="main">
      <div className="container">
        {!catalog.length ? <Loader /> : <CategoryList catalog={catalog} />}
      </div>
    </div>
  );
}

export default Main;
