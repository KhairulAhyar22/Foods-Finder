import './data-item.js';
class DataList extends HTMLElement {

    set clubs(foods){
        this._clubs = foods;
        this._clubs.forEach(foodItem => {
            const clubItemElement = document.createElement("data-item");

            clubItemElement.food = foodItem;          
            this.append(clubItemElement);
        });
    }
}
customElements.define("data-list", DataList);