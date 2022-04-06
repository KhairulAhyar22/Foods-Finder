import '../components/data-list.js'
import '../components/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {

    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("data-list");

    let onButtonSearchClicked = () => {//promise resolve reject
        DataSource.searchFood(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
        
    };
    const renderResult = results => {
        clubListElement.clubs = results;
        
    };

    const fallbackResult = (message ) =>{
        clubListElement.innerHTML = "";
        clubListElement.innerHTML = `<h2 class="placeholder">${message}</h2>`;
    }

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;