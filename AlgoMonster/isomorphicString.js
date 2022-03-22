/*
  https://algo.monster/problems/isomorphic_string
 
  #1
  Input:
  str_1 = "egg"
  str_2 = "all"

  Output: 
  true

  #2
  Input:
  str_1 = "wow"
  str_2 = "aaa"

  Output: 
  false

 */

function isIsomorphic(str1, str2) {
    if(str1.length != str2.length) return false;
    let n = str1.length;
    let obj = {};
    for(let i=0; i<n; i++){
        obj[str1[i]] = str2[i]; 
    }
    for(let i=0; i<n; i++){
        if(obj[str1[i]]!=str2[i]){
            return false;
        }
    }
    let dup = {};
    let objKeyArr = Object.keys(obj);
    for(let i=0; i<objKeyArr.length; i++){
        if(dup[obj[objKeyArr[i]]] == 1){
            return false;
        }else{
            dup[obj[objKeyArr[i]]] = 1;
        }
    }
    return true;
}
