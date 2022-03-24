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

// we are doing preorder traversal
// root left right
function serialize(root) {
    if(root == null) return 'x';
    
    return root.val + ' ' + serialize(root.left) + ' ' + serialize(root.right);
}

// we are doing preorder traversal
// root left right
function deserialize(s) {
    let list = s.split(' ');

    let recurse = function(list){  
        if(list[0] == 'x'){
            list.shift();
            return null;
        }

        let node = new Node(list[0]);
        list.shift();
        node.left = recurse(list);
        node.right = recurse(list);

        return node;
    }

    return recurse(list);
}

let s = serialize(binTree);
console.log(s);
let d = deserialize(s);
console.log(d);
