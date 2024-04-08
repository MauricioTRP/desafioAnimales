import { Animal } from "./clases/Animal.mjs";
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


// cambio de imágen del formulario
document.querySelector("#animal").addEventListener("change", function() {
  const seleccion = this.value;
  const animalSeleccionado = animalData.animales.find(animal => animal.name == seleccion)
  // animalSelecionado { name: String, img: String, sonido: String }
  
  document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`
})

// Manejo del submit del formulario
document.querySelector("#btnRegistrar").addEventListener("click", )