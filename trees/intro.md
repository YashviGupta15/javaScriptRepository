
# Introduction to Tree data structure

Things to be dicussed:
1. What is tree?
2. What is Binary Tree?
3. What is Binary Search Tree?
4. Important terms for trees.
5. Operations in Binary search Tree.

## Trees

Tree: Trees are a data structures that link nodes in a parent/child relationship, in the sense that there're nodes that depend on or come off other nodes.

Trees are formed by a **root node**(the first node of the tree) and all the other nodes comes as **chidren**.

The nodes at the bottom of the tree with no descendants are called **leaf nodes**.

**Height** of the the tree comes of as how many parent/children relations are there in the tree.

Trees are **non-liner**.

An important requirement for tree formation is that **the only valid connection between nodes is from parent to child**. Connection between **siblings or from child to parent are not allowed in trees** (these types of connections form graphs, a different type of data structure). 

Another important requirement is that **trees must have only one root**.

-------------------------------------------------------

## Binary Tree

Binary Tree: Trees are a type of tree in which each node has a maximum of two children.

One key situation in which binary trees are really useful is in **searching**. And for searching, a certain type of binary tree is used, called**binary search trees (BSTs)**.

BSTs are just like binary trees but **information within them is ordered in a way that makes them a suitable data structure for searching**.

In BST, values are ordered so that each node that descends to the left side of its parent must have a value less than its parent, and each node that descends to the right side of its parent must have a value bigger than its parent.

This order in its values make this data structure great for searching, since on every level of the tree we can identify if the value being looked for is greater or less than the parent node, and from that comparison progressively discard roughly half of the data until we reach our value.

When inserting or deleting values, the algorithm will follow the following steps:

Check if there's a root node.
> If there is, check if the value to add/delete is greater or smaller than the node.
> If it is smaller, check if there is a node to the left and repeat the previous operation. If there's not, add/remove the node in that position.
> If it is greater, check if there is a node to the right and repeat the previous operation. If there's not, add/remove the node in that position.
> Searching in BSTs is very similar, only instead of adding/deleting values we check the nodes for equality with the value we're looking for.

The big O complexity of these operations is logarithmic **(log(n))**. But it's important to recognize that for this complexity to be achieved, the tree **must have a balanced structure** so that in each search step, approximately half of the data can be "discarded". **If more values are stored to one side or another of three, the efficiency of the data structure is affected**.

### Operations on BST:

Insertion
Deletion
Search (DFS, BFS)
Finding node

--------------------------------

## Heaps

Heaps are another type of tree that have some particular rules. 

There are two main types of heaps, **MaxHeaps** and **MinHeaps**. 

In **MaxHeaps**, parent nodes are always greater than its children, and in **MinHeaps**, parent nodes are always smaller than its children.

In this data structure there're no guarantees between siblings, meaning that nodes at the same "level" don't follow any rule besides being higher/lower than their parent.

Also, heaps are as compact as possible, meaning each level contains all the nodes it can contain with no empty spaces, and new children are put into the left spaces of the tree first.

Heaps, and in particular binary heaps, are frequently used to implement **priority queues**, which at the same time are frequently used in well-known algorithms such as **Dijkstra's path-finding algorithm**.

**Priority queues** are a type of data structure in which each element has an associated priority and elements with a higher priority are presented first.