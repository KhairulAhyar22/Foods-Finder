class NavBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-info" style="font-weight:bold;">
        <div class="container">
            <a class="navbar-brand" href="#">Foods Finder</a>
            <ul class="navbar-nav" >
                <li class="nav-item">
                    <a href="#" class="nav-link">Fitur</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Populer</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Categori</a>
                </li>
            </ul>
        </div>
    </nav>`;
    }
}
customElements.define("nav-bar", NavBar);