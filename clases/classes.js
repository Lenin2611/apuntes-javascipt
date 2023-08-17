class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Brayan', 22);
const persona2 = new Persona('Iker',20);
const persona3 = new Persona('Lenin',18);

persona1.saludar();
persona2.saludar();
persona3.saludar();

// Lenin Santiago Muñoz Quintero