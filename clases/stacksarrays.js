class stack {
    constructor() {
        this.items = [];
    }
    //Ingresar un dato 
    push(item) {
        this.items.push(item);
    }
    //Sacar in dato
    pop() {
        if(this.isEmpty()){
            return 'La pila esta vacia';
        }
        return this.items.pop();
    }
    //Revisar el primer dato encontrado
    peek() {
        if(this.isEmpty()) {
            return 'La pila esta vacia';
        }
        return this.items[this.items.length-1];
    }
    //Verificar si la pila esta vacia
    isEmpty() {
        return this.items.length === 0;
    }
    //Retornar el tamaño
    size() {
        return this.items.length;
    }
    //Limpiar
    clear() {
        this.items = [];
    }
}

const stack1 = new stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());
stack1.pop();
console.log(stack1.peek());
stack1.clear();
console.log(stack1.peek());

// Lenin Santiago Muñoz Quintero