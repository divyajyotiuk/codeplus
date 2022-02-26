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
