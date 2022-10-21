class BinaryTreeNode{
    constructor(value)
    {
        this.value = (value || value === 0)? value: null;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinaryTreeNode;