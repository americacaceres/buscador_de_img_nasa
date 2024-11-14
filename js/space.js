
const URL = 'https://images-api.nasa.gov/';
const SEARCH = 'search?q='


function searchImage (texto) {
  fetch( URL + SEARCH + texto)
  .then (response => response.json())
  .then (data => console.log(data))
}
searchImage("andromeda")

document.addEventListener("DOMContentLoaded", () => {
  let btnBuscar = document.getElementById("btnBuscar");
  let id= btnBuscar.value().trim();
  btnBuscar.addEventListener("click", () => {
    searchImage(id)
    });
})
