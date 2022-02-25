/**
 * LC Medium - https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  
    let ans = recursiveCombo(digits);

    return ans;
};

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
