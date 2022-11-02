const path = require('path');
const BinaryTreeNode =  require(path.join(__dirname,'..', 'dataStructure', 'binaryTreeNode.js'));

class ConvertArrayToBinaryTree
{
    convertNestedArrayStructureToBinaryTree(array)
    {
        let newNode;
        if (array === null)
        {
            newNode = null;
        }
        else if(array.constructor !== Array)
        {
            newNode = new BinaryTreeNode(array);
        }
        else if(array.constructor === Array)
        {
            newNode = new BinaryTreeNode(array[0]);
            newNode.left = this.convertNestedArrayStructureToBinaryTree(array[1]);
            newNode.right = this.convertNestedArrayStructureToBinaryTree(array[2])
        }

        return newNode;
    }
}

module.exports  = ConvertArrayToBinaryTree;