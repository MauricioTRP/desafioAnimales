import { Leon } from "./clases/Leon.mjs";
import { Lobo } from "./clases/Lobo.mjs";
import { Aguila } from "./clases/Aguila.mjs";
import { Oso } from "./clases/Oso.mjs";
import { Serpiente } from "./clases/Serpiente.mjs";
import { animalHandler } from "./modules/animalsHandler.mjs"

// Obtención de data usando promesa de animalHandler
let animalData = '';
animalHandler.getAnimalData()
  .then(data => animalData = data)
  .catch(err => {
    alert("Lo sentimos, no pudimos cargar la data de los animales. Prueba recargando la página")
    console.error(err)
  })

// Objeto que mapea nombres de animales, con constructores
// Llave "texto", valor "Constructor" importados en al principio
const constructoresAnimal = {
  Leon: Leon,
  Lobo: Lobo,
  Aguila: Aguila,
  Oso: Oso,
  Serpiente: Serpiente
}

// cambio de imágen del formulario
document.querySelector("#animal").addEventListener("change", function() {
  const seleccion = this.value;
  const animalSeleccionado = animalData.animales.find(animal => animal.name == seleccion)
  // animalSelecionado { name: String, img: String, sonido: String }
  
  document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`
})

// Manejo de envío del formulario
document.querySelector("#btnRegistrar").addEventListener("click", function() {
  // Análisis formulario //
  // buscamos elementos a analizar
  const seleccion = document.getElementById("animal").value
  const edadAnimal = document.getElementById("edad").value
  const comentariosAnimal = document.getElementById("comentarios").value

  // preguntamos si algún campo está vacío
  if ( !seleccion || !edadAnimal || !comentariosAnimal ) {
    // en caso de estar vacío mandamos un alert
    alert("Información insuficiente para crear animal")
  } else {
    const dataAnimalSeleccionado = animalData.animales.find(animal => animal.name == seleccion)

    // Creamos instancia del animal, usando el objeto constructores animal
    let nuevoAnimal = new constructoresAnimal[seleccion](
      seleccion,
      edadAnimal,
      dataAnimalSeleccionado.imagen,
      comentariosAnimal,
      dataAnimalSeleccionado.sonido
    )
    
    // agrega el animal al array con animales
    animalHandler.animalsArray.push(nuevoAnimal)

    // renderiza nuevamente las cartas
    animalHandler.renderAnimals()

    // limpia los datos del formulario
    document.getElementById("animal").selectedIndex = 0
    document.getElementById("edad").selectedIndex = 0;
    document.getElementById("comentarios").value = ''
    document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/lion.svg)`
  }
})