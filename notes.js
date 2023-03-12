// Trees

// A tree is a abstract data structure where there is one head/root, which has children that can also branch off and have other children until they reach a dead end.

// Examples of a tree structure are the DOM, and a computer's file system.

// It is important that a tree has only one root Node to be considered a tree.
// Also, each node can only have one parent.

// 1. Terminology

//  - Node -> basic unit
//  - Children -> nodes directly below a node
//  - Descendants -> node below a node
//  - Parent -> node that is directly above a node
//  - Ancestor -> node that is above a node
// 	- Root node -> node at the top of the tree
// 	- Leaf Node -> a node without any children

// 2. Binary Tree

// In a binary tree, each node can have at most 2 children

// There are also "n-ary" trees that have no constraints as to how many nodes or children each node can contain.
// 3. Implementations

// Linked List Example:
// class Node {
//     constructor(val, children = []) {
//         this.val = val;
//         this.children = children;
//     }
// }

// let amy = new Node('amy', [
//     new Node('bob', [new Node('chris')]),
//     new Node('barb'),
//     new Node('barry'),
// ]);

// In the above case, amy is the root node, that has 3 direct children, and bob has only one child ('chris'), and the other nodes (barb and barry) are leaf nodes because they have no children

// 4. Depth First Search

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    find(val) {
        const toVisitStack = [this];
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitStack.push(child);
            }
        }
    }
}

let htmlElDFS = new Node('html', [
    new Node('head', [new Node('title')]),
    new Node('body', [new Node('ul', [new Node('li'), new Node('li2')])]),
]);

// With a depth first search approach, you utilize a "stack", and first search all the way down the most recently visited node and its children, and then down another node and all its children until the value is either found or not found.
// Elements are popped off the stack and its children are added and then popped off until the value is found.
// It is important that a stack is used so that the last element is the first element out(LIFO)

// 5. Breadth First Search

class NodeBFS {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    find(val) {
        const toVisitQueue = [this];
        while (toVisitQueue.length) {
            const current = toVisitQueue.shift();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
    }
}

let htmlElBFS = new NodeBFS('html', [
    new NodeBFS('head', [new NodeBFS('title')]),
    new NodeBFS('body', [
        new NodeBFS('ul', [new NodeBFS('li'), new NodeBFS('li2')]),
    ]),
]);

// With the breadth first approach, elements that need to be visited are removed first in first out.
// Think of the elements being traversed horizontally.

// 5. Tree Class
