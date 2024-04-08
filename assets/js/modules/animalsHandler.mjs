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
            width="100%"
          >
          <button class="btn btn-secondary w-100"><img src="./assets/imgs/audio.svg" height="30px"></button>
        </div>
      </div>`

      cards += card;
    })

    document.getElementById("Animales").innerHTML = cards;
  }

  // returned object

  return {
    getAnimalData: getAnimalData,
    animalsArray: animalsArray,
    renderAnimals: renderAnimals
  }
})()

export { animalHandler }