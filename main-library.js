const path = require('path');

// modules of the library:

// Array-classes modules:
const ArrayMethods = require(path.join(__dirname, 'array-classes', 'arrayMethods.js'));
const ConvertArrayToBinaryTree = require(path.join(__dirname, 'array-classes', 'convertArrayToBinaryTree.js'));
// Binary-tree-classes modules:
const BinaryTreeTraversal = require(path.join(__dirname, 'binary-tree-classes', 'binaryTreeTraversal.js'));

// DataStructure modules:
const BinaryTreeNode = require(path.join(__dirname, 'dataStructure', 'binaryTreeNode.js'));
const HashMapForChars = require(path.join(__dirname, 'dataStructure', 'hashMapForChars.js'));
const HashMapForNumbers = require(path.join(__dirname, 'dataStructure', 'hashMapForNumbers.js'));

// Math-classes modules:
const ComparisonsMethods = require(path.join(__dirname, 'math-classes', 'comparisonsMethods.js'));


// module export:
module.exports = {
    ArrayMethods,
    ConvertArrayToBinaryTree,
    BinaryTreeTraversal,
    BinaryTreeNode,
    HashMapForChars,
    HashMapForNumbers,
    ComparisonsMethods
}