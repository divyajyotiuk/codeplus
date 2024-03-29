/**
 * LC Medium - https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  
    let ans = recursiveCombo(digits);

    return ans;
};

// try not to use map the next time and
// calculate these values using some pattern
// hint: use ascii probably
var mapping = {
    "2":["a","b","c"],
    "3":["d","e","f"],
    "4":["g","h","i"],
    "5":["j","k","l"],
    "6":["m","n","o"],
    "7":["p","q","r","s"],
    "8":["t","u","v"],
    "9":["w","x","y","z"],
}

var recursiveCombo = function(up,arr=[]){
    if(up.length == 0){
        return arr;
    }
    
    let mapP = mapping[up[0]];
    
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<mapP.length;j++){
            let ele = arr[i] + mapP[j];
            newArr.push(ele);
        }
    }

    if(newArr.length == 0){
        return recursiveCombo(up.substring(1), mapP);
    }else{
        return recursiveCombo(up.substring(1), newArr);
    }
    
}


/**
 * Amazon - Get the possible number of combinations of number on dice that add up to the target
 * @param {String} p 
 * @param {Number} target 
 * @returns {Array}
 */
function diceRollsForTargetSum(p,target){
    console.log("diceRollsForTargetSum(",p,",",target,")");
    if(target == 0){
        let a = []
        a.push(p);
        return a;
    }

    let arr = [];
    for(let i=1;i<=6 && i<=target;i++){
        arr = arr.concat(diceRollsForTargetSum(p+i,target - i));
    }

    return arr;
}

// let ans = diceRollsForTargetSum("",4);
// console.log(ans);


// print all possible paths from start to end in matrix maze
function matrixMaze(start, end, path=''){
    console.log("matrixMaze(",start,",",path,")");
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        let a = [];
        a.push(path);
        return a;
    }

    let arr = [];
    if(cy1 < cy2){
        let rPath = matrixMaze([rx1,cy1+1], end, path + 'R');
        arr = arr.concat(rPath);
    }
    
    if(rx1 < rx2){
        let dPath = matrixMaze([rx1+1,cy1], end, path + 'D');
        arr = arr.concat(dPath);
    }
   
    return arr;
}

// let a = matrixMaze([0,0],[2,2]);
// console.log(a); //[ 'RRDD', 'RDRD', 'RDDR', 'DRRD', 'DRDR', 'DDRR' ]


// print count of all possible paths from start to end in matrix
function mazePathCount(start, end){
    console.log("matrixMaze(",start,")");
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        return 1;
    }

    let sum=0;
    if(cy1 < cy2){
        sum = sum + mazePathCount([rx1,cy1+1], end);
    }
    
    if(rx1 < rx2){
        sum = sum + mazePathCount([rx1+1,cy1], end);
    }
   
    return sum;
}

// let a = mazePathCount([0,0],[2,2]);
// console.log(a);


// print all possible paths from start to end in matrix maze
// along with diagonal moves
function mazeWithDiagonalMove(start, end, path = ''){
    console.log("matrixMaze(",start,",",path,")");
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        let a = [];
        a.push(path);
        return a;
    }

    let arr = [];
    if(cy1 < cy2){
        let r = mazeWithDiagonalMove([rx1,cy1+1], end, path + 'R');
        arr = arr.concat(r);
    }
    
    if(rx1 < rx2){
        let D = mazeWithDiagonalMove([rx1+1,cy1], end, path+'D');
        arr = arr.concat(D);
    }

    if(rx1 < rx2 && cy1 < cy2){
        let d =  mazeWithDiagonalMove([rx1+1,cy1+1], end, path+'d');
        arr = arr.concat(d);
    }
   
    return arr;
}

// let a = mazeWithDiagonalMove([0,0],[2,2]);
// console.log(a);
/* [
  'RRDD', 'RDRD', 'RDDR',
  'RDd',  'RdD',  'DRRD',
  'DRDR', 'DRd',  'DDRR',
  'DdR',  'dRD',  'dDR',
  'dd'
] */


// print all possible paths from start to end in matrix maze
// along with diagonal moves with obstacles
function mazeWithObstacles(maze, start, end, path = ''){
    console.log("mazeWithObstacles(",path,")");
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        let a = [];
        a.push(path);
        return a;
    }

    let arr = [];
    if(maze[rx1][cy1] != 0){

        if(cy1 < cy2){
            let r = mazeWithObstacles(maze, [rx1,cy1+1], end, path + 'R');
            arr = arr.concat(r);
        }
        
        if(rx1 < rx2){
            let D = mazeWithObstacles(maze,[rx1+1,cy1], end, path+'D');
            arr = arr.concat(D);
        }

        if(rx1 < rx2 && cy1 < cy2){
            let d =  mazeWithObstacles(maze,[rx1+1,cy1+1], end, path+'d');
            arr = arr.concat(d);
        }
    }
   
    return arr;
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]];

// let a = mazeWithObstacles(matrix, [0,0], [2,2]);
// console.log(a); // [ 'RRDD', 'RdD', 'DDRR', 'DdR' ]




// print all possible paths from start to end in matrix maze
// take up, left, right, down
function backtracking(maze, start, end, path = ''){
    console.log("backtracking(",path,")");
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        let a = [];
        a.push(path);
        return a;
    }

    let arr = [];

    if(maze[rx1][cy1]){

        maze[rx1][cy1] = 0; // mark as visited

        if(rx1 <  maze.length - 1){
            let D = backtracking(maze,[rx1+1,cy1], end, path+'D');
            arr = arr.concat(D);
        }

        if(cy1 < maze[0].length-1){ // check if visited
            let r = backtracking(maze, [rx1,cy1+1], end, path + 'R');
            arr = arr.concat(r);
        }

        if(rx1 > 0){
            let U = backtracking(maze,[rx1-1,cy1], end, path+'U');
            arr = arr.concat(U);
        }

        if(cy1 > 0){
            let l = backtracking(maze, [rx1,cy1-1], end, path + 'L');
            arr = arr.concat(l);
        }

        maze[rx1][cy1] = 1; // restoring the matrix state
        
    }
   
    return arr;
}

let matrix = [[1,1,1],[1,1,1],[1,1,1]];

// let a = backtracking(matrix, [0,0], [2,2]);
// console.log(a);
/*
[
  'DDRR',     'DDRURD',
  'DDRUURDD', 'DRDR',
  'DRRD',     'DRURDD',
  'RDDR',     'RDRD',
  'RDLDRR',   'RRDD',
  'RRDLDR',   'RRDLLDRR'
]
*/

// print all possible paths from start to end in matrix maze
// take directions up, left, right, down
// and number the path
function backtrackingWithNumbering(maze, start, end, path = '', i=1){
    let rx1 = start[0];
    let cy1 = start[1];
    let rx2 = end[0];
    let cy2 = end[1];

    if(rx1 == rx2 && cy1 == cy2){
        maze[rx1][cy1] = i; // mark final destination visited
        console.log("backtrackingWithNumbering(",maze,")");
        let a = [];
        a.push(path);
        return a;
    }

    let arr = [];

    if(!maze[rx1][cy1]){

        maze[rx1][cy1] = i; // mark as visited

        if(rx1 <  maze.length - 1){
            let D = backtrackingWithNumbering(maze,[rx1+1,cy1], end, path+'D',i+1);
            arr = arr.concat(D);
        }

        if(cy1 < maze[0].length-1){ // check if visited
            let r = backtrackingWithNumbering(maze, [rx1,cy1+1], end, path + 'R',i+1);
            arr = arr.concat(r);
        }

        if(rx1 > 0){
            let U = backtrackingWithNumbering(maze,[rx1-1,cy1], end, path+'U',i+1);
            arr = arr.concat(U);
        }

        if(cy1 > 0){
            let l = backtrackingWithNumbering(maze, [rx1,cy1-1], end, path + 'L',i+1);
            arr = arr.concat(l);
        }

        maze[rx1][cy1] = 0; // restoring the matrix state
        
    }
   
    return arr;
}

let matrix = [[0,0,0],[0,0,0],[0,0,0]];

// let a = backtrackingWithNumbering(matrix, [0,0], [2,2]);
// console.log(a);


// N-QUEENS
/*
 Space Complexity - O(n*n)
 Time Complexity - O(n!)
 Recurrence relation - T(n) = n*T(n-1) + O(n*2)
 */
function nQueens(matrix, r){
    console.log("nQueens(",matrix,")");
    if(r == matrix.length){
        console.log("solution(",matrix,")");
        return 1;
    }

    let count = 0;
    for(let col=0; col<matrix[0].length; col++){
        if(isSafe(matrix,r,col)){
            matrix[r][col] = 1;
            count = count + nQueens(matrix, r+1);
            matrix[r][col] = 0;
        }
    }

    return count;
}

// check queens in previous rows
function isSafe(matrix, r, c){
   
    // check diagonally left
    for(let col=c-1,row=r-1; col>=0 && row>=0; col--,row--){
        if(matrix[row][col]){
            return false;
        }
    }

    // check vertically up
    for(let row=r-1;row>=0;row--){
        if(matrix[row][c]){
            return false;
        }
    }

    // check diagonally right
    for(let col=c+1,row=r-1; col<matrix[0].length && row>=0; col++,row--){
        if(matrix[row][col]){
            return false;
        }
    }

    return true;
    
}

// let board = [ [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0] ] // 4x4
// let ans = nQueens(board, 0);
// console.log(ans);


// N-KNIGHTS
function nKnights(matrix, r, c, k){
    //console.log("nKnights(",matrix,r,c,k,")");
    if(k == 0){
        console.log("solution(",matrix,r,c,k,")");
        return;
    }

    if(r == matrix.length - 1 && c == matrix[0].length){
        return;
    }

    if(c == matrix[0].length){
        nKnights(matrix, r+1, 0, k);
        return;
    }

    if(isSafe(matrix,r,c)){
        matrix[r][c] = 1;
        nKnights(matrix, r, c+1, k-1);
        matrix[r][c] = 0;
    }

    nKnights(matrix, r, c+1, k);


}

function isSafe(matrix, r, c){

    let row = r, col = c;

        // check up-right
    row = r - 1;
    col = c + 2;
    if(isValid(matrix,row,col) && matrix[row][col]){
        return false;
    }

    row = r - 2;
    col = c + 1;
    if(isValid(matrix,row,col) && matrix[row][col]){
        return false;
    }

    // check up-left
    row = r - 1;
    col = c - 2;
    if(isValid(matrix,row,col) && matrix[row][col]){
        return false;
    }
    row = r - 2;
    col = c - 1;
    if(isValid(matrix,row,col) && matrix[row][col]){
        return false;
    }

    return true;
    
}

function isValid(matrix, r, c){
    return (r>=0 && c < matrix[0].length && c>=0);
}

// let board = [ [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0] ] // 4x4
// let ans = nKnights(board, 0, 0, 4);
// console.log(ans);

