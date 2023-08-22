class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(value) { // Agregar un elemento al final de la lista
        const pushed = new Node(value);
        if (this.size === 0) {
            this.head = pushed;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = pushed;
        }
        this.size++;
    }
    insertAtHead(value) { // Agregar un elemento al principio de la lista
        const pushed = new Node(value);
        pushed.next = this.head;
        this.head = pushed;
        this.size++;
    }
    pop() { // Eliminar el elemento al final de la lista
        if (this.size === 0) {
            return;
        }
        else if (this.size === 1) {
            this.head = null;
            this.size = 0;
        }
        else {
            let current = this.head;
            let prev = this.head;
            for (let i = 0; i < (this.size -1); i++) {
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
            this.size--;
        }
    }
    del() { // Eliminar el elemento al principio de la lista
        if (this.size === 0) {
            return;
        }
        else {
            let current = this.head;
            this.head = current.next;
            this.size--;
        }
    }
    peekFirst() { // Mostrar el elemento al principio de la lista
        return this.head;
    }
    peekLast() { // Mostrar el elemento al final de la lista
        let current = this.head;
        for (let i = 0; i < (this.size - 1); i++) {
            current = current.next;
        }
        return current;
    }
    isEmpty() { // Mostrar si la lista esta vacia (true) o no (false)
        if (this.size === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    len() { // Mostrar el tamano de la lista
        return this.size;
    }
    search(value) { // Buscar un elemento en especifico en la lista
        if (this.size === 0) {
            return;
        }
        else {
            let current = this.head;
            for (let i = 0; i < this.size; i++) {
                if (current.value === value) {
                    return current;
                }
                else {
                    current = current.next;
                }
            }
            return null;
        }
    }
    remove(value) { // Eliminar el elemento ingresado de la lista
        if (this.size === 0) {
            return;
        }
        else {
            let current = this.head;
            let prev = this.head;
            for (let i = 0; i < (this.size); i++) {
                if (value === current.value && value !== this.head.value) {
                    prev.next = current.next;
                    this.size--;
                    return;
                }
                else if (value === this.head.value) {
                    this.head = current.next;
                    this.size--;
                    return;
                }
                prev = current;
                current = current.next;
            }
            return null;
        }
    }
    toArray() { // Cambiar la lista enlazada a un array
        let array = [];
        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
    reverse() { // Cambiar el orden al reves de la lista
        if (this.size === 0) {
            return;
        }
        let current = this.head;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.size; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    insertAfter(which, value) { // Agregar un elemento despues de which
        if (this.size === 0) {
            return;
        }
        let current = this.head;
        while (current.value !== which) {
            current = current.next;
        }
        let next = current.next;
        const pushed = new Node(value);
        pushed.next = next;
        current.next = pushed;
        this.size++;
    }
    insertBefore(which, value) { // Agregar un elemento antes de which
        if (this.size === 0) {
            return;
        }
        else if (which === this.head.value) {
            const pushed = new Node(value);
            pushed.next = this.head;
            this.head = pushed;
        }
        else {
            let current = this.head;
            let prev = this.head;
            while (current.value !== which) {
                prev = current;
                current = current.next;
            }
            const pushed = new Node(value);
            prev.next = pushed;
            pushed.next = current;
        }
        this.size++;
    }

}

let myList = new linkedList;

// console.log('\nLista vacia:\n');
// console.log(myList);
// console.log('\ninsertAtHead:\n');
// myList.insertAtHead(1);
// console.log(myList);
// myList.insertAtHead(2);
// myList.push(3);
// console.log(myList);

// console.log('\nLista:\n');
// console.log(myList);
// myList.push(1);
// myList.push(2);
// console.log(myList);
// console.log('\npop del ultimo elemento (segundo elemento):\n');
// myList.pop();
// console.log(myList);
// console.log('\npop del ultimo elemento (primer elemento):\n');
// myList.pop();
// console.log(myList);

// console.log('Lista:\n');
// myList.push(1);
// myList.push(2);
// console.log(myList);
// console.log('\ndel del primer elemento (primer elemento):\n');
// myList.del();
// console.log(myList);
// console.log('\ndel del primer elemento (segundo elemento):\n');
// myList.del();
// console.log(myList);

// console.log('Lista:\n');
// myList.push(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// myList.push(5);
// console.log(myList);
// console.log('\npeekFirst:\n');
// console.log(myList.peekFirst());
// console.log('\npeekLast:\n');
// console.log(myList.peekLast());

// console.log('\nLista:\n');
// myList.push(1);
// console.log(myList);
// console.log('\nisEmpty:\n');
// console.log(myList.isEmpty());
// console.log('\nlen:\n');
// console.log(myList.len());

// console.log('\nLista:\n');
// myList.push(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// myList.push(5);
// console.log(myList);
// console.log('\nsearch(3):\n');
// console.log(myList.search(3));
// console.log('\nsearch(6):\n');
// console.log(myList.search(6));

// console.log('\nLista:\n');
// myList.push(2);
// myList.push(1);
// myList.push(3);
// console.log(myList);
// console.log('\nremove(2):\n');
// myList.remove(2);
// console.log(myList);

// console.log('\nLista:\n');
// myList.push(2);
// myList.push(1);
// myList.push(3);
// console.log(myList);
// console.log('\ntoArray:\n');
// console.log(myList.toArray());

// console.log('\nLista:\n');
// myList.push(1);
// myList.push(2);
// myList.push(3);
// myList.push(4);
// console.log(myList);
// myList.reverse();
// console.log(myList);

// console.log('\nLista:\n');
// myList.push(1);
// myList.push(2);
// console.log(myList);
// console.log('\ninsertAfter:\n');
// myList.insertAfter(1, 3);
// console.log(myList);

// console.log('\nLista:\n');
// myList.push(1);
// myList.push(2);
// console.log(myList);
// console.log('\ninsertBefore:\n');
// myList.insertBefore(1, 3);
// console.log(myList);