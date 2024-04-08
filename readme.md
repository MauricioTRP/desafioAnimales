# Desafío Animales

El proyecto implementa una solución al desafío final del módulo `programación avanzanda con JS`

## Implementación de clases

Para el desafío se considera la siguiente estructura de clases, la cual se puede encontrar en `./assets/js/classes` todas invocadas en `./assets/js/main.js`. Para poder acceder a los comentarios desde las clases se cambió `set` por `get` para comentarios

```mermaid
  classDiagram
  Animal <|-- Leon
  Animal <|-- Lobo
  Animal <|-- Oso
  Animal <|-- Serpiente
  Animal <|-- Aguila
  class Animal{
    #String nombre
    #String edad
    #String img
    #String comentarios
    #String sonido
    #String getNombre()
    #String getEdad()
    #String getImg()
    #String getComentarios()
    #String getSonido()
  }

  class Leon {
    +rugir()
  }
  class Lobo {
    +aullar()
  }
  class Oso {
    +grunir()
  }
  class Serpiente {
    +sisear()
  }
  class Aguila {
    +chillar()
  }
```

## Implementación de Módulo

Para dar cumplimiento a la implementación de un `IIFE` se crea un módulo con la siguiente estructura

```mermaid
classDiagram
    class animalHandler {
        +animalsArray: array
        -modalEventListener: Function
        -soundEventListener: Function
        +getAnimalData(): Promise
        +renderAnimals(): Function
        +playAudio(id): Function
        +updateModal(id): Function
    }
```

### `getAnimalData()`

Es la promesa que trae la información desde `animales.json`, `animalsArray` es el array que se encarga de mantener el estado de los animales creados. No se implementa lógica para modificar posibles animales.
Por último la función `renderAnimals` se encarga de renderizar los animales en la "sección tabla"

#### importante sobre `getAnimalData()`

Esta función refactoriza el trabajo dealizado en clases respecto a la obtención asíncrona de datos desde `animales.json()`

### animalsArray

Es un array que almacena las instancias de los animales creados a través del formulario

### -modalEventListener()

Es una función privada que analiza el DOM buscando todas las
imagenes que cumplen con `.participante > div > img` que renderizan las cartas con animales, y les agrega un event listener usando la función pública `updateModal`

### updateModal(id)

Función que actualiza el contenido del modal, usando como argumento el índice del animal en el array `animalsArray`

### -soundEventListener()

Es una función privada que analiza el DOM buscando todas las
imagenes que cumplen con `.participante > div > buttpn` que renderizan las imágenes con parlantes, y les agrega un event listener usando la función pública `playAudio`

### playAudio(id)

Función atenta al evento click de los botones de audio que crea un objeto de audio con la ruta del audio, y luego lo reproduce

## Eventos y manejo de formulario

En `index.js` se importan las clases y el módulo, para hacer uso de ellos en los `callbacks` utilizados en `addEventListener`
