import Meal from "../models/meal";

class MealItem extends HTMLElement{
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="card" style="width: 100%;">
                <img src="${this._meal.strMealThumb}" class="card-img-top" alt="${this._meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${this._meal.strMeal}</h5>
                    <h6><strong>Cooking Instruction : </strong></h6>
                    <p class="card-text">${this._meal.strInstructions}</p>
                    <a href="${this._meal.strSource}" class="btn btn-primary">See the full source</a>
                </div>
            </div>
        `;
    }
}

customElements.define("meal-item", MealItem);