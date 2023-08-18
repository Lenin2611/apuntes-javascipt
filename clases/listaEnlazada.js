class Lista {
    constructor(){
        this.top = null;
        this.lista = [];
    }
    push(element){
        const newElement = new Nodo(element);
        if (this.lista.length == 0){
            this.lista.push([newElement, this.top]);
            this.top = newElement;
        }
        else{
            this.lista.push([newElement, this.top]);
            this.top = newElement;
        }
    }

}

class Nodo {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

let listaAnidada = new Lista();
listaAnidada.push(24);
listaAnidada.push(2);
listaAnidada.push(3);
listaAnidada.push(9);

console.log(listaAnidada);