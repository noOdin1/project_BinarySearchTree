<h1>Project Binary Search Tree - TOP JS Path 82%</h1>

This project will focus on the Binary Search Tree Data Structures.<br>
A Binary Search Tree (BST) is a type of data structure that employs nodes<br>
and vertices. The characteristics of a BST are:<br>
1.&ensp;Each node is connected by at most 3 vertices, either 0 or 1 pointing<br> 
&emsp;&nbsp;towards the node and either 0, 1 or 2 going outwards from the node.<br>
2.&ensp;The starting node or commonly known as the root node has node incoming<br>
&emsp;&nbsp;vertice, and has 1 or 2 outgoing vertice(s).<br>
3.&ensp;The each node would have a value assigned to it.<br>
4.&ensp;The next node to be attached or have vertices from the root node connected,<br>
&emsp;&nbsp;must a value assigned that is less than the root node. This node is<br>
&emsp;&nbsp;assigned to the left hand side of the root node.<br>
5.&ensp;The next node to be attached or have vertices from the root node connected,<br>
&emsp;&nbsp;must a value assigned that is more than the root node. This node is<br>
&emsp;&nbsp;assigned to the right hand side of the root node.<br>
<br>
<hr>
&emsp;When constructing a BST, it can be filled with values from an array that is unsorted<br>
or sorted. Both of these would result in a very different BST. Another aspect on BST<br>
construction is that the root node can start from the first element of the array supplied<br>
or it can start from the middle.<br>

The following are the objectives outline in TOP BST project:<br>

| Project Objectives                                                                                                            |          status           |
| ----------------------------------------------------------------------------------------------------------------------------- | :-----------------------: |
| 1. Node class/factory function to represent BST nodes.<br>                                                                    | [done] :white_check_mark: |
| 2. Create a class/factory called Tree.<br>                                                                                    | [in progress] :hourglass_flowing_sand: |
| 3. Tree class must have a rootNode attribute.<br>                                                                             | [done] :white_check_mark: |
| 4. buildTree(array) function that builds a BST using the array passed in.<br>&emsp;This function returns the root node of the BST created.<br>                                                 | [done] :white_check_mark: |
| 5. includes() function that returns 'true' or 'false' on whether a value<br>&emsp;exists on the BST.<br>                      | [done] :white_check_mark: |
| 4. insert(value) function that inserts a node with the value supplied in<br>&emsp;accordance with the BST rules.<br>          | [done] :white_check_mark: |
| 6. deleteItem(value) function that removes the node with the value supplied<br>                                               | [in progress] :hourglass_flowing_sand: |
| 7. levelOrderForEach(callback) function that traverses the BST breadth first.<br>&emsp;A callback function must be supplied or else throw an error.<br>&emsp;The callback function must be used on each node value during the<br>&emsp;traversal process.<br>                                               | [in progress] :hourglass_flowing_sand: |
| 8. inOrderForEach(callback) function that traverses the BST using<br>&emsp;in-order process. Callback function must be supplied, or throw an error.<br>&emsp;The callback function operates on the node values.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 9. preOrderForEach(callback) function that traverses the BST using<br>&emsp;pre-order process. Callback function must be supplied, or throw an error.<br>&emsp;The callback function operates on the node values.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 10. postOrderForEach(callback) function that traverses the BST using<br>&emsp;&ensp;post-order process. Callback function must be supplied, or throw an<br>&emsp;&ensp;error. The callback function operates on the node values.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 11. height() function that returns the height of a given value. Height is<br>&emsp;&ensp;defined as the number of edges/vertices in the longest path from<br>&emsp;&ensp;that node to a leaf node.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 12. depth(value) function that returns the depth of a node matching the<br>&emsp;&ensp;given value. Depth is defined as the number of edges/vertices<br>&emsp;&ensp;in the longest path from that node to the root node.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 13. isBalanced() function that checks if the tree is balanced. A binary<br>&emsp;&ensp;tree is considered balanced, if for every node in the tree,<br>&emsp;&ensp;the height difference between its left and right subtrees is no more<br>&emsp;&ensp;than 1, and both the left and right subtrees are also balanced.<br>                                              | [in progress] :hourglass_flowing_sand: |
| 14. rebalance() function that rebalances an unbalanced tree.<br>                                                              | [in progress] :hourglass_flowing_sand: |
