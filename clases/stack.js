class Stack {
    constructor() {
        this.top = null;
    }
    push(element) {
        let prev = this.top;
        let node = new Node(element);
        node.prev = prev;
        this.top = node;
    }
    pop(element) {
        
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
    }
}

const MyStack = new Stack;
MyStack.push(10);
console.log(MyStack);