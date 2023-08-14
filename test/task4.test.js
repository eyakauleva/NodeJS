import { debounce } from "../src/task4.js";

const search = (value) => alert(value);
const searchHandler = debounce(search, 1500);
const inputElement = document.getElementById("search-input");
inputElement.addEventListener("input", event => {  
    searchHandler(event.target.value);  
});