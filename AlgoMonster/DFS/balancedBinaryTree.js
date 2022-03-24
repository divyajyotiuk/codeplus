class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let binTree = new Node(3);
binTree.left = new Node(4);
binTree.left.left = new Node(5);

// perform postorder traversal
// left, right, root
// return diff of left subtree and right subtree to the root.
function treeHeight(root){
    if(root == null) return 0;
    
    let leftHeight = treeHeight(root.left);
    let rightHeight = treeHeight(root.right);
    
    if(Math.abs(leftHeight - rightHeight) > 1){
        return -1;
    }
    
    return Math.max( leftHeight, rightHeight ) + 1;
}

function isBalanced(tree) {
    if(tree == null) return true;
    
    return treeHeight(tree) >= 0;
}

console.log(isBalanced(binTree));
