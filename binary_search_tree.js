/* binary_search_tree.js */
import { merge_sort } from "./merge_sort_recursion.js";

/* class definition for a node point for this project */
class Node {
  constructor(val = null, leftNode = null, rightNode = null) {
    this.val = val;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

class Tree {
  constructor(rootNode = null) {
    this.rootNode = rootNode;
  }
}

export { Node, Tree };
