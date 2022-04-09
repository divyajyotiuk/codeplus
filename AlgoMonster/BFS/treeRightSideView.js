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
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * LC - Medium
 */
function binaryTreeRightSideView(root) {
    let list = [];
    let queue = [];
    let result = [];
    if(root){
        queue.push([root,0]);
    }
    let front = [];
    while(queue.length){
        front = queue.shift();
        if(!list[front[1]]){
            list[front[1]] = []
        }
        // append the results array with rightmost element of previous level
        if((front[1]-1) >=0 && !list[front[1]].length){
            let rightMost = list[front[1]-1].length - 1;
            result.push(list[front[1]-1][rightMost]);
        }
        list[front[1]].push(front[0].val);
        if(front[0].left){
            queue.push([front[0].left, front[1]+1])
        }
        if(front[0].right){
            queue.push([front[0].right, front[1]+1])
        }
    }

    // check the last level and add rightmost element
    if((front[1]) >=0){
        let rightMost = list[front[1]].length - 1;
        result.push(list[front[1]][rightMost]);
    }
    
    return result;
}

let val = binaryTreeRightSideView(binTree);
console.log(val);
