// create a binary tree
// find max depth in binary tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let binTree = new TreeNode(5);
binTree.right = new TreeNode(1);
binTree.right.left = new TreeNode(8);
binTree.right.right = new TreeNode(11);
binTree.right.left.left = new TreeNode(9);


function treeMaxDepth1(root, level=0) {
    if(root == null) return level;
    
    let currLevel = level + 1; // visited add 1
    let leftMax = treeMaxDepth1(root.left, currLevel);
    let rightMax = treeMaxDepth1(root.right, currLevel);
 
    return Math.max(leftMax,rightMax);
}

// without extrra argument
function treeMaxDepth2(root) {
    if(root == null) return 0;
 
    return Math.max(treeMaxDepth2(root.left), treeMaxDepth2(root.right)) + 1;
}

let depth = treeMaxDepth2(binTree);
console.log(depth);
