class searchBar extends HTMLElement {
    htmlOption = '';

    set categories(categories){
        this._categories = categories;
        this.renderCategoryOption();
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
    }

    get value(){
        let returnValue = {
            keyword: this.querySelector("#text-cariResep").value,
            category: this.querySelector("#selCategory").value
        }
        return returnValue;
    }

    render(){
        this.innerHTML = `
        <div class="form-group row" style="width:100%">
            <div class="col-md-7">
                <input type="text" class="form-control" placeholder="Kata kunci pencarian dalam bahasa inggris" id="text-cariResep">
            </div>
            <div class="col-md-3">
                ${this.htmlOption}
            </div>
            <div class="col-md-2">
                <button class="btn btn-block btn-primary" id="btn-cari">Cari</button>
            </div>
        </div>`;
        this.querySelector("#btn-cari").addEventListener("click", this._clickEvent);
    }

    renderCategoryOption(){
        let htmlOption = '<select class="form-control" id="selCategory">';
        this._categories.forEach(category => {
            htmlOption += `<option value="${category.strCategory}">${category.strCategory}</option>`;
        });
        htmlOption += '</select>';
        this.htmlOption = htmlOption;
    }
}

customElements.define("search-bar", searchBar);