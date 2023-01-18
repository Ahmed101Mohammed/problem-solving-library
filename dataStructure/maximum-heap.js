class Node
{
    constructor(value)
    {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

}

class MaxHeap
{
    constructor()
    {
        this.head = null;
    }

    insert = (value)=>
    {
        let newNode = new Node(value);
        if(this.head === null)
        {
            this.head = newNode;
        }
        else
        {
            this.#addToTheNextPosition(newNode);
            this.#heapUp(newNode);
        }
    }

    #addToTheNextPosition = (node)=>
    {
        let theLastParentHasEmpityChield = this.#getTheLastParentHasEmpityChield();
        this.#addNodeToTheEmpityChield(theLastParentHasEmpityChield,node);
    }

    #getTheLastParentHasEmpityChield = ()=>
    {
        let nodes = [this.head];
        for(let node of nodes)
        {
            if (node.left !== null && node.right !== null)
            {
                nodes.push(node.left, node.right);
                continue;
            }

            return node;
        }
    }

    #addNodeToTheEmpityChield = (parentNode,chieldNode)=>
    {
        chieldNode.parent = parentNode;
        if(parentNode.left !== null)
        {
            parentNode.right = chieldNode;
            return;
        }
        parentNode.left = chieldNode;
    }

    #heapUp = (node)=>
    {
        if(node.parent !== null && node.parent.value < node.value)
        {
            let parentValue = node.parent.value;
            let currentNodeValue = node.value;

            node.value = parentValue;
            node.parent.value = currentNodeValue;

            let curNode = node.parent;

            this.#heapUp(curNode);
        }
    }

    pop = ()=>
    {
        let lastChield = this.#getLastChield();
        this.#removeNode(lastChield);

        this.head.value = lastChield.value;
        this.#heapDown(this.head);
    }

    #getLastChield = ()=>
    {
        let nodes = [this.head];

        for (let node of nodes)
        {
            if(node.left !== null) nodes.push(node.left);
            if(node.right !== null) nodes.push(node.right);
        }

        return nodes[nodes.length - 1];
    }

    #removeNode = (node)=>
    {
        if(node.parent.right !== null && node.parent.right.value === node.value )
        {
            node.parent.right = null;
        }
        else
        {
            node.parent.left = null;
        }
    }

    #heapDown = (node)=>
    {
        if(node.left === null && node.right === null)
        {
            return;
        }

        let largerChield = this.#getTheLargerChield(node);

        if(largerChield.value > node.value)
        {
            let nodeValue = node.value;
            let chieldValue = largerChield.value;

            node.value = chieldValue;
            largerChield.value = nodeValue;
            this.#heapDown(largerChield);
        }
    }

    #getTheLargerChield = (node)=>
    {
        if(node.right === null) return node.left;
        if(node.left === null) return node.right;
        if(node.left.value > node.right.value) return node.left;
        return node.right;
    }

    print = ()=>
    {
        let nodes = [this.head];
        let print_nodes = `[`
        for(let node of nodes)
        {
            print_nodes += node.value + ','
            if(node.left !== null) nodes.push(node.left);
            if(node.right !== null) nodes.push(node.right);
        }

        print_nodes += ']'
        console.log(print_nodes);
    }

}

// export:
module.exports = MaxHeap;