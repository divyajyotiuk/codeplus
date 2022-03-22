// create a binary tree
// find maximum in binary tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let binTree = new TreeNode(5);
binTree.left = new TreeNode(1);
binTree.left.left = new TreeNode(8);
binTree.left.right = new TreeNode(11);


function dfs( node ){
    if(node == null){
        return Number.MIN_VALUE;
    }

    let leftMaxValue = dfs(node.left);
    let rightMaxValue = dfs(node.right);

    return Math.max(node.val, leftMaxValue, rightMaxValue);
}

let max = dfs(binTree);
console.log(max);
