import { Animal } from "./clases/Animal.mjs";
import { Leon } from "./clases/Leon.mjs";
import { Lobo } from "./clases/Lobo.mjs";
import { Aguila } from "./clases/Aguila.mjs";
import { Oso } from "./clases/Oso.mjs";
import { Serpiente } from "./clases/Serpiente.mjs";


// cambio de imágen del formulario
document.querySelector("#animal").addEventListener("change", async function() {
  let baseUrl = "."
  let recurso = "/animales.json"
  // obtenemos data del usuario y disponible
  let response = await fetch(baseUrl + recurso);
  let data = await response.json()

  const seleccion = this.value;
  const animalSeleccionado = data.animales.find(animal => animal.name == seleccion)
  // animalSelecionado { name: String, img: String, sonido: String }

  
  document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${animalSeleccionado.imagen})`
})