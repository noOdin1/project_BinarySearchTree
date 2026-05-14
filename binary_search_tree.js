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

  prettyPrint(node = this.rootNode, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.prettyPrint(
      node.rightNode,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false,
    );
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
    this.prettyPrint(
      node.leftNode,
      `${prefix}${isLeft ? "    " : "│   "}`,
      true,
    );
  }

}

export { Node, Tree };
