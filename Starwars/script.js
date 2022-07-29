
var personajes = JSON.parse(file).results
let nombreInput = document.getElementById("nombreInput")
let container = document.getElementById("container")

function buscarBtn(){
    let personaje = buscar(nombreInput.value)


container.innerHTML =`

        
<img class="imagen_personaje" src="${personaje.image}" alt="imagen">

<p>${personaje.description}</p>
`


descripcion.innerHTML =`

        <h2>   <span>Nombre: ${personaje.name}</span></h2><br>
        <p>    
            <span>Altura: ${personaje.height} cm</span><br><br>
            <span>Peso: ${personaje.mass} kg</span><br><br>
            <span>Color de Cabello: ${personaje.hair_color}</span><br><br>
            <span>Color de Piel: ${personaje.skin_color}</span><br><br>
            <span>Color de Ojos: ${personaje.eye_color}</span><br><br>
            <span>Año de Nacimiento: ${personaje.birthday_year}</span><br><br>
            <span>Genero: ${personaje.gender}</span><br><br>
            <span>Peliculas en las que aparece: ${personaje.films}</span><br><br>
            <span>Especie: ${personaje.species}</span><br><br>
            <span>Maneja los Vehiculos: ${personaje.vehicles}</span><br><br>
            <span>Starships: ${personaje.starships}</span><br><br>
            
            </p>
    `
}

function buscar(nombre){
    for(let i = 0; i < personajes.length; i++){
        if(nombre == personajes[i].name){
            return personajes[i]

        }
    }
}

function cambioNombreLuke() {
    document.getElementById("nombreInput").value = "Luke Skywalker";
  }

  function cambioNombreC3PO() {
    document.getElementById("nombreInput").value = "C-3PO";
  }

  function cambioNombreR2D2() {
    document.getElementById("nombreInput").value = "R2-D2";
  }

  function cambioNombreDarth() {
    document.getElementById("nombreInput").value = "Darth Vader";
  }

  function cambioNombreLeia() {
    document.getElementById("nombreInput").value = "Leia Organa";
  }

  function cambioNombreOwen() {
    document.getElementById("nombreInput").value = "Owen Lars";
  }

  function cambioNombreBeru() {
    document.getElementById("nombreInput").value = "Beru Whitesun Lars";
  }

  function cambioNombreR5D4() {
    document.getElementById("nombreInput").value = "R5-D4";
  }

  function cambioNombreBiggs() {
    document.getElementById("nombreInput").value = "Biggs Darklighter";
  }

  function cambioNombreObi() {
    document.getElementById("nombreInput").value = "Obi-Wan Kenobi";
  }

{/* <span>Planeta Natal: ${planeta.name}</span><br> */}



