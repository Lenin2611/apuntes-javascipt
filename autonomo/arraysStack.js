class Stack {
    constructor() {
        this.stack = [];
        this.top = null;
    }
    push(value) {
        this.stack.push(new Node(value));
        this.top = value;
    }
    pop() {
        if (this.stack.length > 0) { // Solo cuando el stack tiene un elemento como minimo
            const nodeDel = this.stack.pop(); // Eliminamos el ultimo elemento
            if (this.isEmpty()) { // Se verifica que el stack este completamente vacio
                this.top = null; // Declaramos que el stack ha sido vaciado, pues el elemento observado es el null (fondo del stack)
            }
            else { // En caso de que todavia no este vacio
                this.top = this.stack[this.stack.length - 1]; // Declaramos al nuevo ultimo nodo como el elemento observado
            }
            return nodeDel; // Retornamos el nodo que se elimino
        }
    }
    peek() {
            return this.top;
    }
    log() {
        
        return this.stack;
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
    }
}

let myStack = new Stack;
myStack.push('2');
myStack.push('4');
myStack.push('5');
myStack.push('2');
console.log(myStack.log());
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.log());
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.isEmpty());