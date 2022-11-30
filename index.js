class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(data){
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    //Insert last node 
    insertLast(data){
        const node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    //Insert at index
    insertAt(data, index){
        if(index > 0 && index > this.size){
            return;
        }

        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current = this.head;
        let count = 0;
        let previous;
        

        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }
        node.next = current;
        previous.next = node;
    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                return current.data;
            }
            current = current.next;
            count++;
        }
    }

    // Remove at index
    remuveAt(index){
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
            return;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
        

    }

    //Clear the list
    clear(){
        this.head = null;
        this.size = 0;
    }

    //Print list data

    printListData(){
        let current = this.head;
        
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(500);
ll.insertFirst(300);
ll.insertAt(124242,0);
ll.insertAt(9,0);
ll.insertAt(12,3);
ll.getAt(1);


ll.printListData()
