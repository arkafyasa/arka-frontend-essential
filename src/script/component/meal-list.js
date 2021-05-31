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
        console.error(`Message from API : ${message}`);
        this.renderNotFoundMessage();
    }

    render(){
        this.innerHTML = "";
        if(this._meals.length > 0){
            this._meals.forEach(mealItem => {
                const mealItemElement = document.createElement("meal-item");
                mealItemElement.classList.add('col-md-6');
                mealItemElement.meal = mealItem;
                this.appendChild(mealItemElement); 
            });
        }else{
            this.renderNotFoundMessage();
        }
        
    }

    renderNotFoundMessage(){
        const mealListElement = document.querySelector("meal-list");
        mealListElement.innerHTML = `
            <div class="alert alert-warning" role="alert" style="width: 100%">
                 Cant Find Food
            </div>`;
    }
}

customElements.define("meal-list", MealList);