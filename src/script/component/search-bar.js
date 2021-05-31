class searchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        let returnValue = {
            keyword: this.querySelector("#text-cariResep").value
        }
        return returnValue;
    }

    render(){
        this.innerHTML = `
        <div class="form-group row" style="width:100%">
            <div class="col-md-10">
                <input type="text" class="form-control" placeholder="Kata kunci pencarian dalam bahasa inggris" id="text-cariResep">
            </div>
            <div class="col-md-2">
                <button class="btn btn-block btn-primary" id="btn-cari">Cari</button>
            </div>
        </div>`;
        this.querySelector("#btn-cari").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", searchBar);