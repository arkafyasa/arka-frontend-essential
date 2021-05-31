import "./meal-item.js";

class MealList extends HTMLElement{
    set meals(meals){
        this._meals = meals;
        this.render();
    }

    set keyword(keyword){
        this._keyword = keyword;
    }

    renderError(message){
        alert(message);
    }

    render(){
        this.innerHTML = "";
        this._meals.forEach(mealItem => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.classList.add('col-md-6');
            mealItemElement.meal = mealItem;
            this.appendChild(mealItemElement); 
        });
    }
}

customElements.define("meal-list", MealList);