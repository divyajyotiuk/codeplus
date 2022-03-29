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

function validBst(root) {
    
    let dfs = function(root, min, max){
        if(root == null) return true;
        
        if(!(root.val >= min && root.val <= max)){
            return false;
        }
        
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }

    
    return dfs(root, Number.MIN_VALUE, Number.MAX_VALUE);
}
let ans = validBst(binTree);
console.log(ans);
