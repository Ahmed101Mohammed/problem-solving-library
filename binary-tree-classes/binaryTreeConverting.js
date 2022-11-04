class BinaryTreeConverting
{
    convertBinaryTreeToArray(root)
    {
        let binaryTreeInArray = [root.value];
        let nodesOfBinaryTree = [root];
        for(let node of nodesOfBinaryTree)
        {
            binaryTreeInArray.push(node.left.value);
            binaryTreeInArray.push(node.right.value);
            
            if(node.left !== null)
            {
                nodesOfBinaryTree.push(node.left);
            }

            if(node.right !== null)
            {
                nodesOfBinaryTree.push(node.right);
            }
        }

        return binaryTreeInArray;
    }
}

module.export = BinaryTreeConverting;