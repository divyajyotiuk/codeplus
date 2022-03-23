// create a binary tree
// find max depth in binary tree
// non recursive implementation

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

// non-recursive DFS 
// uses stack
function treeMaxDepth(root){
    let maxDepth = 0;
    let stack = [];
    if(root){
        stack.push([root, 1])
    }
    
    while(stack.length){
        let tuple = stack.pop();
        maxDepth = Math.max(maxDepth, tuple[1]);
        if(tuple[0].left){
            stack.push([tuple[0].left, tuple[1] + 1 ])
        }
        if(tuple[0].right){
            stack.push([tuple[0].right, tuple[1] + 1 ])
        }
    }

    return maxDepth;
}

let depth = treeMaxDepth(binTree);
console.log(depth);
