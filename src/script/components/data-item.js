class DataItem extends HTMLElement {

    set food(food){
        this._food = food;
        this.innerHTML = `
            <div class="col-lg-12" style="margin-top: 12px;">
                <div class="card border-warning text-success mx-auto text-center" style="width:20rem;">

                    <div class="card-header">
                        <h3 style="text-align:center;">Data Club</h3>
                    </div>
                    <img src="${this._food.strTeamBadge}" class="card-img-top" alt=".." style="margin:8px auto;">
                    <div class="card-body">
                        <h5 class="card-title">${this._food.strTeam}</h5>
                        <p class="card-text">Category : ${this._food.strCategory}</p>
                        <p class="card-text">${this._food.strDescriptionEN}</p>
                        <a href="#" class="btn btn-info text-center"
                        >Go somewhere</a>
                    </div> 
                </div>
            </div>
            `;

    }
}
customElements.define("data-item", DataItem);