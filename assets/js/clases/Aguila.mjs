import { Animal } from "./Animal.mjs";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  chilla() {
    return 'chiiiiiiAAA!'
  }
}

export { Aguila }