import "../component/search-bar.js";
import "../component/meal-list.js";
import Meal from "../models/meal.js";

const main = () => {
    const searchBar = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    mealListElement.classList.add('col', 'row');
    getCategories()
            .then( categories => {
                searchBar.categories = categories
            });


    searchBar.clickEvent = async () => {
        try{
            let result = [];
            result = await Meal.searchByKeywordFilterCategory(searchBar.value.keyword, searchBar.value.category);
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

const getCategories = async () => {
    try{
        return await Meal.getCategoryList();
    }catch (message){
        console.error(message);
    }
}

export default main;