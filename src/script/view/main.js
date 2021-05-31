import "../component/search-bar.js";
import "../component/meal-list.js";
import Meal from "../models/meal.js";

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    mealListElement.classList.add('row');

    searchBar.clickEvent = async () => {
        try{
            let result = [];
            result = await Meal.searchByKeyword(searchBar.value.keyword);
            renderResult(result);
        }catch (message){
            renderError(message);
        }
    }

    const renderResult = result => {
        mealListElement.meals = result;
    }

    const renderError = message => {
        mealListElement.renderError(message);
    }
}

export default main;