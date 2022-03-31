// Leetcode Easy
// https://leetcode.com/problems/invert-binary-tree
class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let binTree = new Node(6);
binTree.left = new Node(4);
binTree.left.left = new Node(3);
binTree.left.right = new Node(5);
binTree.right = new Node(8);

function invertBinaryTree(tree) {
    
    let dfs = function(root){
        if(root == null){
            return root;
        }
        
        let temp = dfs(root.left);
        root.left = dfs(root.right);
        root.right = temp;
        
        return root;
    }
    
    return dfs(tree);
}

let tree = invertBinaryTree(binTree);
console.log(tree);
