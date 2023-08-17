class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null;
        this.size=0;
    }

    isEmpty(){
        return this.size ===0;
    }
    push(value){
        const newNode = new node(value)
        newNode.next = this.top;
        this.top=newNode;
        this.size++;
    }

    pop(){
        if(!this.top){
            return "Is Empty"
        }
        const poppedValue = this.top.value;
        this.top=this.top.next;
        this.size--;
        return this.top.value;
    }
}

// Lenin Santiago Muñoz Quintero