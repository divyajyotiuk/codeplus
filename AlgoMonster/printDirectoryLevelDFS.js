// create a n-ary tree
// pretty print directory level

class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

let directoryTree = new TreeNode('/');
directoryTree.children = [ new TreeNode('faa'), new TreeNode('boo') ];
directoryTree.children[0].children = [ new TreeNode('faz') ];

let indentPerLevel = '  ';
function dfs( node, indentLevel ){

    let currIndentLevel = indentLevel + indentPerLevel;
    console.log(currIndentLevel, node.val + '\n');
    for(let i=0; i<node.children.length;i++){
        dfs(node.children[i], currIndentLevel);
    }
}

dfs(directoryTree, '');
