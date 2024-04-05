# Desafío Animales

El proyecto está basado en el desafío del módulo `programación avanzanda con JS`

Para el desafío se considera la siguiente estructura de clases, la cual se puede encontrar en `./assets/js/classes` todas invocadas en `./assets/js/main.js`

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
