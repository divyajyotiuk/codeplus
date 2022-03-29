// Difficulty - Medium
// https://leetcode.com/problems/insert-into-a-binary-search-tree

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

function insertBst(bst, val) {
    
    let recurse = function(root, val){
        if(root == null){
            return new Node(val);
        }
        
        if(val < root.val){
            root.left = recurse(root.left, val);
            
        }
        
        if(val > root.val){
           root.right = recurse(root.right, val);
        }
        
        return root;
    }
    
    return recurse(bst, val);
}

let tree = insertBst(binTree, 7);
console.log(tree);
