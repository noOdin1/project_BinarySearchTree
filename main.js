/* main.js */
import { Node, Tree } from "./binary_search_tree.js";

let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let bst = new Tree();
bst.buildTree(testArray);
// bst.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// bst.buildTree([1, 2, 3, 4, 5, 6, 7, 8]);
// bst.buildTree([13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// bst.traverseTree();
bst.includes(67);
