import { Animal } from "./Animal.mjs";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  grunir() {
    return 'gggrrRRRRrrr'
  }
}

export { Oso }