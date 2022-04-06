class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    render(){
        this.innerHTML =`
        <div class="container">
            <div class="d-flex">
                <input class="form-control me-2" id="searchElement" type="search" placeholder="Search Food Name" aria-label="Search">
                <button class="btn btn-outline-success" type="submit" id="searchButtonElement">Search</button>
            </div>
        </div>    
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }

    get value(){
        return this.querySelector("#searchElement").value;
    }
}
customElements.define("search-bar", SearchBar);