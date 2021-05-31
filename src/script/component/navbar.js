class Navbar extends HTMLElement {

    // constructor() {
    //     super();
    //     this.shadowDOM = this.attachShadow({mode: "open"});
    // }

    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = 
        `<nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Manganopo</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
            </ul>
            </div>
        </nav>`;
    }
}

customElements.define("navbar-custom", Navbar);