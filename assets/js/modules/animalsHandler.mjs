const animalHandler = (() => {
  const animalsArray = []

  function getAnimalData() {
    let baseUrl = "."
    let recurso = "/animales.json"

    return new Promise((resolve, reject) => {
      fetch(baseUrl + recurso)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  function renderAnimals() {
    // Define cartas como texto vacío
    let cards = ''

    // itera por cada animal para crear las cartas
    // hasta acá tiene el desafío con todos los requerimientos
    animalsArray.forEach((animal, idx) => {
      const card = `<div class="participante px-3 pb-2" id="animal-${idx}">
        <div>
          <img 
            src="./assets/imgs/${animal.img}" 
            height="200px" 
            data-toggle="modal" data-target="#exampleModal"
            width="100%"
          >
          <button class="btn btn-secondary w-100">
            <img 
              src="./assets/imgs/audio.svg" 
              height="30px"
            >
          </button>
        </div>
      </div>`

      cards += card;
    })

    document.getElementById("Animales").innerHTML = cards;

    modalEventListener()

    soundEventListener()
  }

  function modalEventListener() {
    const imagenes = document.querySelectorAll(".participante > div > img")
    imagenes.forEach((img, idx) => {
      img.addEventListener("click", () => {
        updateModal(idx)
      })
    })
  }

  function soundEventListener() {
    const sonidos = document.querySelectorAll(".participante > div > button")
    sonidos.forEach((sound, idx) => {
      sound.addEventListener("click", () => {
        playAudio(idx)
      })
    })
  }

  function playAudio(id) {
    const audio = new Audio(`./assets/sounds/${animalsArray[id].sonido}`)
    console.log(audio)
    audio.play()
  }

  function updateModal(id) {
    const modal = document.querySelector(".modal-body")
    console.log(animalsArray[id])
    modal.innerHTML = `<p>${animalsArray[id].nombre}</p>
    <p>${animalsArray[id].edad}</p>
    <p>${animalsArray[id].comentarios}</p>
    `
  }

  // returned object

  return {
    getAnimalData: getAnimalData,
    animalsArray: animalsArray,
    renderAnimals: renderAnimals,
    playAudio: (id) => {playAudio(id)},
    updateModal: (id) => {updateModal(id)}
  }
})()

export { animalHandler }