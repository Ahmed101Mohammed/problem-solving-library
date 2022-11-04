class BinaryTreeConverting
{
    convertBinaryTreeToArray(root)
    {
        let binaryTreeInArray = [];
        let nodesOfBinaryTree = [root];
        for(let node of nodesOfBinaryTree)
        {
            if(node !== null)
            {
                binaryTreeInArray.push(node.value);
                nodesOfBinaryTree.push(node.left);
                nodesOfBinaryTree.push(node.right);
            }
            else
            {
                binaryTreeInArray.push(null);
            }
        }

        return binaryTreeInArray;
    }
}

module.exports = BinaryTreeConverting;