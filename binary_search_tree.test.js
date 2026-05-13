/* binary_search_tree.test.js */
import { Tree, Node } from "./binary_search_tree";

describe("Testing Tree class", () => {
  let tree;
  let testArray;
  beforeEach(() => {
    tree = new Tree();
    // test data from the project page
    testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  });
  test("Test buildTree(), test with empty array", () => {
    expect(tree.buildTree([])).toEqual(undefined);
  });
  test("Test buildTree(), test with array of 1 item", () => {
    tree.buildTree([1]);
    expect(tree.returnRoot()).toEqual({
      val: 1,
      leftNode: null,
      rightNode: null,
    });
  });
  test("Test buildTree(), test with array of 2 item", () => {
    tree.buildTree([1, 2]);
    expect(tree.returnRoot()).toEqual({
      val: 2,
      leftNode: { val: 1, rightNode: null, leftNode: null },
      rightNode: null,
    });
  });
  test("Test buildTree(), test with array of 3 item", () => {
    tree.buildTree([1, 2, 3]);
    expect(tree.returnRoot()).toEqual({
      val: 2,
      leftNode: { val: 1, leftNode: null, rightNode: null },
      rightNode: { val: 3, leftNode: null, rightNode: null },
    });
  });
  test("Test buildTree(), test with project suggested array", () => {
    tree.buildTree(testArray);
    expect(tree.returnRoot()).toEqual({
      val: 8,
      leftNode: {
        val: 4,
        leftNode: {
          val: 3,
          leftNode: { val: 1, leftNode: null, rightNode: null },
          rightNode: null,
        },
        rightNode: {
          val: 7,
          leftNode: { val: 5, leftNode: null, rightNode: null },
          rightNode: null,
        },
      },
      rightNode: {
        val: 67,
        leftNode: {
          val: 23,
          leftNode: { val: 9, leftNode: null, rightNode: null },
          rightNode: null,
        },
        rightNode: {
          val: 6345,
          leftNode: { val: 324, leftNode: null, rightNode: null },
          rightNode: null,
        },
      },
    });
  });
});
