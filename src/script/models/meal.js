class Meal{
    static searchByKeyword(keyword){
        return fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Makanan dengan kata kunci "${keyword}" tidak ditemukan`)
                }
            })
    }

    static searchByKeywordFilterCategory(keyword, category){
        return fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    responseJson.meals = responseJson.meals.filter((value, index, arr) => {
                        return value.strCategory == category;
                    });
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Makanan dengan kata kunci "${keyword}" tidak ditemukan`)
                }
            })
    }

    static searchByIngredient(ingredient){
        return fetch(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => {
                
                return response.json()
            })
            .then(responseJson => {
                console.log(responseJson);
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Makanan dengan bahan ${ingredient} tidak ditemukan`)
                }
            })  
    }

    static searchByCategory(category){
        return fetch(`${baseUrl}/search.php?c=${category}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Makanan dengan kategori ${category} tidak ditemukan`)
                }
            })  
    }

    static getMealById(mealId){
        return fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals[0]){
                    return Promise.resolve(responseJson.meals[0]);
                }else{
                    return Promise.reject(`Cant find meal with id ${mealId}`);
                }
            })
    }

    static getCategoryList(){
        return fetch(`http://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response => {
                return response.json()
            })
            .then(responseJson =>{
                if(responseJson.categories){
                    return Promise.resolve(responseJson.categories);
                }else{
                    return Promise.reject(`Error cant fetch categories`);
                }
            });
    }
}

export default Meal;