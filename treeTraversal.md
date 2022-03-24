Traversals in Trees

- BFS Breadth First Search (level order)
- DFS Depth First Search
  - Preorder traversal (root, left, right)
  - Inorder traversal (left, root, right)
  - Postorder traversal (left, right, root)


**Preorder Taversal**
```
function preorder(root){
  if(root == null) return;
  
  console.log(root.val);
  
  preorder(root.left);
  preorder(root.right);
}
```

**Inorder Taversal**
```
function inorder(root){
  if(root == null) return;
  
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
```

**Postorder Taversal**
```
function postorder(root){
  if(root == null) return;
  
  postorder(root.left);
  postorder(root.right);
  console.log(root.val);
}
```
