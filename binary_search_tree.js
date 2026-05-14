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

  buildTree(array) {
    // From the argument array, it will be sorted and filtered to have only
    //   unique values
    this.rootNode = this.binarySearchTree(
      Array.from(new Set(merge_sort(array))),
    );
    // console.dir(this.rootNode, { depth: null });
    // this.prettyPrint(this.rootNode);
  }

  binarySearchTree(array) {
    let mpnt = Math.floor(array.length / 2);

    if (array.length == 0) {
      return null;
    }
    // if (array.length == 1) {
    //   return new Node(array[0]);
    // }
    let rootNode = new Node(array[mpnt]);
    rootNode.leftNode = this.binarySearchTree(array.slice(0, mpnt));
    rootNode.rightNode = this.binarySearchTree(
      array.slice(mpnt + 1, array.length),
    );
    return rootNode;
  }



  searchNode(node, value) {
    if (node == null) return false;

    console.log(`node value: ${node.val}, value: ${value}`);
    if (node.val == value) {
      return true;
    }
    if (this.searchNode(node.leftNode, value) == true) return true;
    if (this.searchNode(node.rightNode, value) == true) return true;
    return false;
  }

}

export { Node, Tree };
