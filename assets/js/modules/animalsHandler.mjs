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

  function createNewAnimal(animalInstance) {
    animalsArray.push(animalInstance)
  }

  // returned object

  return {
    getAnimalData: getAnimalData,
    animalsArray: animalsArray
  }
})()

export { animalHandler }