class Node {
    constructor(value) {
        this.value = value;
    }
}

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
        if (this.stack.length > 0) {
            const popped = this.stack.pop();
            if (this.isEmpty()) {
                this.top = null;
            }
            else {
                this.top = this.stack[this.stack.length - 1];
            }
            return popped;
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
        if (this.size() === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}