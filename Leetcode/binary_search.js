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
            return m + 1;
        }
        if(arr[m] < arr[e]){
            e = m - 1;
        }else{
            s = m + 1;
        }
    }
    return 0;
}


/**
 *
 * https://leetcode.com/problems/split-array-largest-sum/
 *
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let n=nums.length;
    
    let s = findMaxNum(nums);
    let e = calcSum(nums,0,n-1);
    
    if(m == 1) return e;
    if(m == n) return s;
    
    while(s<e){
        let mid = s + Math.floor((e-s)/2);
        let sum = 0;
        let p = 1;
        for(let no of nums){
            if((sum + no) > mid){
                // start new array & increase the partitions
                sum = no;
                p = p + 1;
            }else{
                sum = sum + no;
            }
        }
        
        if(p<=m){
            e = mid;
        }else{
            s = mid + 1;
        }
        
    }
    
    return s; // start == end
};

function calcSum(nums, s, e){
    let sum = 0;
    for(let i=s; i<=e; i++){
        sum = sum + nums[i];
    }
    
    return sum;
}

function findMaxNum(nums){
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        if(max < nums[i]){
            max = nums[i];
        }
    }
    
    return max;
}



/*
*  https://divyajyotiuk.hashnode.dev/search-in-matrix
*/

// populate 2D array - row wise and column wise sorted
function populate2DArraySorted(){
    let arr={};
    let k=0;
    for(let i=0;i<6;i++){
        arr[i] = {};
        for(let j=0;j<6;j++){
            arr[i][j] = i*10+j*10+k;
            k = k+1;
        }
    }
    return arr;
}

// binary search in 2D array
// time complexity - O(m+n)
function search(arr,target){
    let m = Object.keys(arr).length; // rows
    let n = Object.keys(arr[0]).length; // cols
    let row=0, col=n-1;
    while(row < m && col > 0){
        if(target == arr[row][col]){
            return [row,col];
        }else if(target < arr[row][col]){
            col = col - 1; // eliminate column
        }else{
            row = row + 1; // eliminate row
        }
    }
    return -1;
}

/*
array is strictly sorted

//0    1     2     3
  1    2    3   4   //0
  5   6    7   8   //1
  9   10    11   12   //2

*/

function populate2DArray(){
    let arr={};
    let k=0;
    for(let i=0;i<6;i++){
        arr[i]={};
        for(let j=0;j<5;j++){
            arr[i][j] = k+1;
            k=k+1;
        }
    }
    return arr;
}

function matrixSearch(nums, target){
    let m = Object.keys(nums).length; // gives #rows
    let n = Object.keys(nums[0]).length; // gives #columns

    let row = binarySearchCol(nums, target, n-1); // give last column and get row
    let col = binarySearchRow(nums, target, row); // search element in that row

    if(nums[row][col] == target) return [row, col];

    return [-1, -1];
}

// returns row which possibly contains the target
function binarySearchCol(nums, target, col){
    let s = 0, n = Object.keys(nums[0]).length, e = n - 1;
    
    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(target == nums[m][col]){
            return m;
        }else if(target < nums[m][col]){
            e = m - 1;
        }else{
            s = m + 1;
        }
    }
    return s;
}

function binarySearchRow(nums, target, row){
    let s = 0, n = Object.keys(nums).length, e = n - 1;
    
    while(s<=e){
        let m = Math.floor((s+e)/2);
        if(target == nums[row][m]){
            return m;
        }else if(target < nums[row][m]){
            e = m - 1;
        }else{
            s = m + 1;
        }
    }
    return s;
}

