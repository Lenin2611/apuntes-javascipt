class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
}

// Lenin Santiago Muñoz Quintero