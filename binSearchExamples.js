/*
https://divyajyotiuk.hashnode.dev/binary-search
*/

/*
Ceiling of a number - find the next smallest number greater than or equal to target from this array
*/

let arr = [2,3,4,6,11,13,14,17,19];
let target = 15;

function ceilingOfNumber(arr, target){
	if(!arr.length) return -1;
  let n = arr.length;
  let s = 0, e = n - 1;
  
  if(target > arr[n-1]) return -1;
  if(target < arr[0]) return arr[0];
  
  while(s<=e){
  	let m = Math.floor((s+e)/2);
    if(target < arr[m]){
    	e = m - 1;
    }else if(target > arr[m]){
      s = m + 1;
    }else{
    	return arr[m];
    }
  }
  
  return arr[s];
}

let ans = ceilingOfNumber(arr,target);
console.log(ans); // 17


/*
Floor of a number - find the largest number in the array less than or equal to target
*/

let arr = [2,3,4,6,11,13,14,17,19];
let target = 15;

function floorOfNumber(arr, target){
  // ...same code as above
  
  if(target > arr[n-1]) return arr[e];
  if(target < arr[0]) return -1;
  
  // ...same code as above
  return arr[e];
}

let ans = floorOfNumber(arr,target);
console.log(ans); // 14



/**
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let s = 0, n = letters.length, e = n - 1;
    while(s <= e){
        let m = Math.floor((s+e)/2);
        if(target < letters[m]){
            e = m - 1;
        }else{
            s = m + 1; // it is necessary that this goes in else condition only
        }
    }
    
    return letters[s%n];
};
