Array.prototype.insert = function (index,items) { // Agregamos un metodo a la clase array, este metodo permitira ingresar un item a lista en la posicion que deseemos, en caso de que tenga [ 'A', 'B', 'E' ]; e ingresemos un item en el index 2, el resultado seria [ 'A', 'B', 'C', 'E']
    this.splice(index, 0,items);
};
Array.prototype.remove = function (index) { // Agregamos un metodo a la clase array, este metodo permitira ingresar un index y eliminar el lista[index] es decir el elemento en la posicion index
    this.splice(index,1)
};
class ListaEnlazadaOD{
    constructor(){
        this.top = null;
        this.lista = [];
    }
    push(element) {
        const newElement = new Nodo(element, this.top);
        this.lista.push(newElement);
        this.top = newElement;
    }
    size() {
        return this.lista.length;
    }
    isEmpty() {
        if (this.size()) {
            return false;
        }
        else {
            return true;
        }

    }
    clear() {
        for (let i = 0; i < this.size(); i++) {
            this.pop();
        }
    }
    pop() {
        if (this.size != 0) {
            let eDel = this.top;
            this.lista.pop()
            if (this.size() == 0){
                this.top = null;
            }
            else {
                this.top = this.lista[this.lista.length -1];
            }
            return eDel;
        }
    }
    insertAt(index, element) {
        this.lista.insert(index, element);
    }
    removeAt(index) {
        this.lista.remove(index);
    }
    getAt(index) {
        return ((this.lista[index]).value);
    }
    index(element) {
        for (let i=0; i < this.size(); i++) {
            const index = this.getAt(i);
            if (index == element) {
                return i;
            }
        }
    }
    log(){
        console.log(this.lista)
    }
    
}




class Nodo {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

let listaAnidada = new ListaEnlazadaOD();
listaAnidada.push(24);
listaAnidada.push(2);
listaAnidada.push(3);
listaAnidada.push(9);
console.log(listaAnidada.size());
console.log(listaAnidada.isEmpty());
console.log(listaAnidada.pop());
listaAnidada.log();
listaAnidada.insertAt(2, 'josesito'); 
listaAnidada.log(); // Aqui el output deberia ser 24,2,josesito,3
listaAnidada.removeAt(2)
listaAnidada.log(); // Aqui el output deberia ser 24,2,3
console.log(listaAnidada.getAt(2)) // Output deberia ser 3
console.log(listaAnidada.index(3)) // Output deberia ser 2