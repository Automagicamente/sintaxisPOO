class Gato{
    #nombre = "def";

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
}

const gato1 = new Gato();
gato1.setNombre("Firulais");
console.log(gato1.getNombre());
