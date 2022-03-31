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

// Leetcode Medium
// Time complexity O(n)
function kthSmallest(bst, k) {
    let num = 0;
    let kSmall = null;
    let inorder = function(root, k){
        if(root == null){
            return;
        }
        
        inorder(root.left, k);
        num = num + 1;
        if(root && k == num){ // we want to end here
            kSmall = root.val;
        }
        inorder(root.right, k);
        
    }
    inorder(bst, k);
    return kSmall;
}

// Time complexity O(h+k)
function kthSmallestOpt(bst, k) {
    let num = 0;

    let inorder = function(root, k){
        if(root == null){
            return null;
        }
        
        let left = inorder(root.left, k);
        if(left){ 
            return left; 
        }
        num = num + 1;
        if(root && k == num){
            return root.val;
        }

        return inorder(root.right, k);
        
    }
    
    return inorder(bst, k);
}

// Using try catch
function kthSmallestOpt(bst, k) {

    try {
        let num = 0;
        let inorder = function(root, k){
            if(root == null) return;

            inorder(root.left, k);

            num = num + 1;

            if(num == k){
                throw root.val;
            }

            inorder(root.right, k);
        }

        inorder(bst, k);
    } catch (kthSmallestVal) {
        return kthSmallestVal;
    }
}

let val = kthSmallest(binTree, 2);
console.log(val);
