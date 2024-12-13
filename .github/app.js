function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#selectedCity");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value)
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
function searchCity(city){
    let apiKey = "a3o950fc274379347b6a44aft08a3cb0";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiURL);
}