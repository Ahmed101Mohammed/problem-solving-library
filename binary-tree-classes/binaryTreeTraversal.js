class BinaryTreeTraversal{
    #OriginRoot;
    #TraveralRoot;
    #visitedNodes = [];

    constructor(rootNaode)
    {
        this.#OriginRoot = rootNaode;
    }

    leftPreOrderTraverse()
    {
        this.#TraveralRoot = this.#OriginRoot;
        if(this.#TraveralRoot === null)
            {
                return;
            }

            this.#visitedNodes.push(this.#TraveralRoot);

            this.this.#TraveralRoot = this.#TraveralRoot.left;
            this.leftPreOrderTraverse();

            this.this.#TraveralRoot = this.#TraveralRoot.right;
            this.leftPreOrderTraverse();
    }

    rightPreOrderTraverse()
    {
        this.#TraveralRoot = this.#OriginRoot;
        if(this.#TraveralRoot === null)
            {
                return;
            }

            this.#visitedNodes.push(this.#TraveralRoot);

            this.#TraveralRoot = this.#TraveralRoot.right;
            this.rightPreOrderTraverse();
    
            this.#TraveralRoot = this.#TraveralRoot.left;
            this.rightPreOrderTraverse();          
    }

    clearVisitedNodesArray()
    {
        this.#visitedNodes = [];
    }
}

module.exports = BinaryTreeTraversal;