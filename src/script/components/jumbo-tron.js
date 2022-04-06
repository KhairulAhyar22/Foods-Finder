class Jumbotron extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <div class="container img">
            <img src="https://niindo.com/wp-content/uploads/2018/02/menu-ramen-kuah-biru-dari-restoran-Kipposhi.png" class="img-fluid"alt="images">
        </div>
        `;
    }
}
customElements.define("jumbo-tron", Jumbotron);