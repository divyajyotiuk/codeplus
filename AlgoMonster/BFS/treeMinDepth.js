class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

let binTree = new Node(1);
binTree.left = new Node(2);
binTree.right = new Node(3);
binTree.left.left = new Node(4);
binTree.left.right = new Node(5);
binTree.left.left.left = new Node(6);

/*
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * LC - Easy
 */
function binaryTreeMinDepth(root) {
    let minDepth = Number.MAX_VALUE;
    let queue = [];
    if(root){
        queue.push([root,0])
    }
    while(queue.length){
        let front = queue.shift();
        let leaf = true;
        if(front[0].left){
            queue.push([front[0].left, front[1]+1])
            leaf = false;
        }
        if(front[0].right){
            queue.push([front[0].right, front[1]+1])
            leaf = false;
        }
        if(leaf){
            minDepth = Math.min(minDepth, front[1])
        }
    }
    // if only root
    if(Number.MAX_VALUE == minDepth){
        return 0;
    }
    return minDepth;
}

let val = binaryTreeMinDepth(binTree);
console.log(val);
