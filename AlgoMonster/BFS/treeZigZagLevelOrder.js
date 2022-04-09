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

/*
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 * LC - Medium
 */
function zigZagTraversal(root) {
    let list = [];
    let queue = [];
    if(root){
        queue.push([root, 0]);
    }
    while(queue.length){
        let front = queue.shift();
        if(!list[front[1]]){
            list[front[1]] = [];
        }
        if(front[1]%2 == 0){ //even, normal push
            list[front[1]].push(front[0].val)
        }else{ // add in front
            list[front[1]].unshift(front[0].val)
        }
        if(front[0].left){
            queue.push([front[0].left, front[1] + 1]);
        }
        if(front[0].right){
            queue.push([front[0].right, front[1] + 1]);
        }
    }
    return list;
}

let val = zigZagTraversal(binTree);
console.log(val);
