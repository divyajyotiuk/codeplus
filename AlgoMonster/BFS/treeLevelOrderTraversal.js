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
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Difficulty Medium
 */
function levelOrderTraversal(root) {
    let list = []
    let queue = [];
    if(root){
        queue.push([root, 0])
    }
    while(queue.length){
        let first = queue.shift();
        if(!list[first[1]]){
            list[first[1]] = [first[0].val];
        }else{
            list[first[1]].push(first[0].val)
        }
        if(first[0].left){
            queue.push([first[0].left, first[1]+1])
        }
        if(first[0].right){
            queue.push([first[0].right, first[1]+1])
        }
    }
    return list;
}

let val = levelOrderTraversal(binTree);
console.log(val);
