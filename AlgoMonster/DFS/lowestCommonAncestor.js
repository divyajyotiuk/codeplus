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

// this function makes 2 recursive calls to solve
// hehe my solution, obvio not optimized
function lca(root, node1, node2) {
    let minTreeHeightNode = root;
    
    let recurse = function(root){
        if(root == null) return;
        let node1Present = find_node(root, node1.val);
        let node2Present = find_node(root, node2.val);
        
        if(node1Present && node2Present){
            minTreeHeightNode = root;
            recurse(root.left);
            recurse(root.right);
        }
    }
    
    recurse(root);
    
    return minTreeHeightNode;
}

function find_node(root, target) {
    if (!root) return;
    if (root.val == target) return root;
    return find_node(root.left, target) || find_node(root.right, target);
}

// optimized LCA with 1 recursive call
function optLCA(root, p, q){
  if(!root) return;
  
  if(root == p || root == q) return root; // if either of them are root
  
  let left = optLCA(root.left, p, q);
  let right = optLCA(root.right, p, q);
  
  if(left && right) return root; // both have a common parent
  
  if(left) return left; // node can be it's own ancestor
  if(right) return right;  // node can be it's own ancestor
  
  return null;
}
