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



/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) { // this seems to be faster
    let s = 0, n = arr.length, e = n - 1;
    
    let m = Math.floor((s+e)/2);
    
    while(s<=e){
        if(arr[m] > arr[m-1] && arr[m] > arr[m+1]){
            return m;
        }else if(arr[m] < arr[m+1]){
            s = m + 1;
        }else if(arr[m] > arr[m+1]){
            e = m - 1 ;
        }
        m = Math.floor((s+e)/2);
    }
    return -1;
};


// with minimum checks
function peakInMountainArray(arr){
    let s = 0, n = arr.length, e = n - 1;
    
    while(s<e){ // when both are equal - we have found the max element
         let m = Math.floor((s+e)/2);
         if(arr[m] > arr[m+1]){ // we are in descending part of array
            e = m; // because this could be the element
         }else{
            s = m + 1;
         }
    }
    return s;
};


// brute force
function mountainArray(arr){
    let a = -1;
    let ind = 0;
    for(let i=0; i<arr.length ; i++){
        if(a < arr[i]){
            a = arr[i];
        }else{
            ind = i-1;
            break;
        }
    }
    return ind;
}

/**
 *
 * https://leetcode.com/problems/find-in-mountain-array/ 
 *
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 *
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let s=0,n=mountainArr.length(),e=n-1;
    
    let peakIndex = peakInMountainArray(mountainArr);
    
    let ind1 =  binSearch( mountainArr, target, s, peakIndex, true );
    
    if(ind1 != -1) return ind1;
    
    let ind2 =  binSearch( mountainArr, target, peakIndex, e );
    
    return ind2;
};

function peakInMountainArray(arr){     // with minimum checks wins here
    let s = 0, n = arr.length(), e = n - 1;
    
    while(s<e){ // when both are equal - we have found the max element
         let m = Math.floor((s+e)/2);
         if(arr.get(m) > arr.get(m+1) ){ // we are in descending part of array
            e = m; // because this could be the element
         }else{
            s = m + 1;
         }
    }
    return s;
};

function binSearch(mountainArr, target, s, e, isAsc){
    while(s<=e){
        let m = Math.floor((s+e)/2);

        if(target == mountainArr.get(m)){
            return m;
        }else{
            if(isAsc){
                if(target < mountainArr.get(m)){
                    e = m - 1;
                }else{
                    s = m + 1;
                }
            }else{
                if(target < mountainArr.get(m)){
                    s = m + 1;
                }else{
                    e = m - 1;
                }
            }
        }
    }
    return -1;
}


/**
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s=0, n=nums.length, e=n-1;
    
    if(nums[s] <= nums[e]){
        return binSearch(nums, target, s, e);
    }
    
    let pivot = findPivotIndex(nums);

    if(pivot != -1){
        if(target <= nums[pivot] && target >= nums[s]){
            return binSearch(nums, target, 0, pivot);
        }else{
            return binSearch(nums, target, pivot + 1, e);
        }
    }
    
    return -1;
};

function findPivotIndex(nums){
    let s=0, n=nums.length, e=n-1;
    
    while(s<e){
        let m = Math.floor((s+e)/2);
        
        if(nums[m] > nums[m+1]){
            return m;
        }else if(nums[s] > nums[m]){
            e = m;
        }else{
            s = m + 1;
        }
    }
    
    return -1;
}

function binSearch(nums, target,s,e){
    
    while(s<=e){
        let m = Math.floor((s+e)/2);
        
        if(nums[m] == target){
            return m;
        }else if(nums[m] > target){
            e = m - 1;
        }else{
            s = m + 1;  
        }
    }
    
    return -1;
}


/**
 * TODO not solved
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 *
 */


/**
 * Rotation count
 * Given: distinct array sorted in ascending order. array rotated clockwise k times. Find k.
 * arr = [12,16,2,3,7,10]
 * Output = 2
 */

// find pivot
function findPivotIndex(arr){
    let s=0,n=arr.length,e=n-1;
    while(s<e){
        let m = s + Math.floor((e-s)/2);
        if(arr[m] > arr[m+1]){
            return m;
        }
        if(arr[m] < arr[m-1]){
            return m;
        }
        if(arr[m] < arr[e]){
            e = m - 1;
        }else{
            s = m + 1;
        }
    }
    return -1;
}


