import { API_URL } from "./config";

const getMealByID = async (id) => {
  const response = await fetch(API_URL + "lookup.php?i=" + id);
  return await response.json();
};

const getMealByCategory = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

const getMealByFilterCategory = async (categoryName) => {
  const response = await fetch(API_URL + "filter.php?c=" + categoryName);
  return await response.json();
};

const getSearchMealByName = async (name) => {
  const response = await fetch(API_URL + "search.php?s=" + name);
  return await response.json();
};

export { getMealByID, getMealByCategory, getMealByFilterCategory, getSearchMealByName};
