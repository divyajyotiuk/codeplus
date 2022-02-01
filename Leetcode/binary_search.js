/*
Revise here: https://divyajyotiuk.hashnode.dev/binary-search
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

/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//optimized
var searchRange = function(nums, target) {
    
    let first = binSearch(nums, target, true);
    let last = binSearch(nums, target, false);
    
    return [first, last];
};


function binSearch(nums, target, isStart){
    let s = 0, n = nums.length, e = n - 1;
    let first = -1, last = -1;
    let ans = -1;
    
    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(target > nums[m]){
            s = m + 1;
        }else if(target < nums[m]){
            e = m - 1;
        }else{
            ans = m;
            if(isStart){    
                e = m - 1;
            }else{
                s = m + 1;
            }
        }
    }
    return ans;
}

// brute force
function twoPointerSearch(nums, target){
    let n = nums.length;
    let lp=0,rp=n-1;
    let a = [];
    let s = -1,e = -1;
    
    while(lp<n || rp>=0){
        if(a.length == 2){
            return a;
        }
        if(nums[lp]==target){
            s = lp;
            lp = n;
        }
        if(nums[rp]==target){
            e = rp;
            rp = -1;
        }
        lp = lp+1;
        rp = rp-1;
    }
    
    a.push(s); a.push(e);
    
    return a;
}

/*
* Position of an Element in Infinite Sorted Array.
*/

function populateArr(arr){ for(let i=0; i<1000;i++){ arr.push(3*i+1); } return arr; }

function searchInfiniteArray(nums, target){
    let s = 0; e = 2**0;
    if(target == nums[s]) return s;
    if(target == nums[e]) return e;
	
    while(target > nums[e]){
        s = e + 1;
        e = 2*s + 1;
    }
    
    return binSearch(nums, target, s, e);
}

function binSearch(nums, target, s, e){
    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(target < nums[m]){
            e = m - 1;
        }else if(target > nums[m]){
            s = m + 1;
        }else {
            return m;
        }
    }
    return -1;
}
let nums = populateArr([]); // array generator
let ind = searchInfiniteArray(nums, 208); // returns 69
console.log(ind);
nums[69]; // on verifying returns 208 



