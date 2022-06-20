import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Category from "./Components/Category";
import MealRecipe from "./Components/MealRecipe";
import NotFound from "./Components/NotFound";
import Search from "./Components/Search";
import SearchMeal from "./Components/SearchMeal";

function App() {
  return (
    <div className="app">
      <Header />
      <br />
      <Search />
      <br />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/category/:name" component={Category} />
        <Route path="/meal/:id" component={MealRecipe} />
        <Route path="/search/meal/:name" component={SearchMeal} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
