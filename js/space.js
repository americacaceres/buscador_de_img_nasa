
const URL = 'https://images-api.nasa.gov/';
const SEARCH = 'search?q='
let arraySearched = [];

function searchImage (texto) {
  fetch( URL + SEARCH + texto)
  .then (response => response.json())
  .then (data => { 
        arraySearched = data.collection.items
        showResults(arraySearched)
  }
  );
}
searchImage("andromeda")
console.log(arraySearched)

document.addEventListener("DOMContentLoaded", () => {
  let btnBuscar = document.getElementById("btnBuscar");
  let inputBuscar = document.getElementById("inputBuscar");
  btnBuscar.addEventListener("click", () => {
    let termSearched = inputBuscar.value.trim();
    searchImage(termSearched);
    });
})

function showResults (array) {
  let contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";
  array.forEach(item => {  
    let imgUrl = item.links ? item.links[0].href : "placeholder.jpg";
    let description = item.data[0].description || "Sin descripción";
  contenedor.innerHTML += ` <div class="card col-12 d-flex m-2 "   style="width: 18rem;" >
          <img src="${imgUrl}" class="card-img-top" alt="Imagen de NASA">
          <div class="card-body">
           <h5 class="card-title">${item.data[0].title}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
             `

  });

}