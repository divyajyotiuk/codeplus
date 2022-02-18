/*
 * Revise here
 * https://divyajyotiuk.hashnode.dev/sorting-part-1
 */
function bubbleSort(nums){
    let n = nums.length;
    let isSwapped = false;
    for(let i=0; i<n; i++){ // passes
        for(let j=1;j<=n-i-1;j++){
            if(nums[j-1]>nums[j]){ // if prev is greater than curr then swap(j-1,j)
                let temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return nums;
}

function selectionSort(nums){
    let n = nums.length;
    for(let i=0; i<n; i++){ // passes for selecting max/min element
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(nums[minIndex] > nums[j]){
                minIndex = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
}

function insertionSort(nums){
    let n = nums.length;
    for(let i=1;i<n;i++){ // runs n-1 times
        for(let j=i;j>0;j--){ // moves towards the left-hand side
            if(nums[j]<nums[j-1]){
                let temp = nums[j-1];
                nums[j-1] = nums[j];
                nums[j] = temp;
            }else{
                break; // left-hand side is already sorted 
            }
        }
    }
    return nums;
}

/*
 * Revise here
 * https://divyajyotiuk.hashnode.dev/cyclic-sort
 */
function cyclicSort(nums){
    let index = 0;
    while(index < nums.length){
        let pos = nums[index]-1; // pos is the correct position of nums[index]
        if(nums[index] != nums[pos]){
            // place nums[index] in its correct position
            let temp = nums[pos]; // swap
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index=index+1;
        }
    }
    return nums;
}

/*
 * Revise here
 * https://divyajyotiuk.hashnode.dev/sorting-part-2
 */
function mergeSort(a){
    if(a.length == 1){
        return a;
    }

    let m = parseInt(a.length/2);

    // Array.prototype.slice provides shallow copy of array. 
    // specify start and end and end is exclusive
    let first = mergeSort(a.slice(0,m));
    let second =  mergeSort(a.slice(m,a.length));

    return merge(first, second);
}

function merge(first=[], second=[]){
    let mergedArr = [];

    let i=0,j=0;

    while(i<first.length && j<second.length){
        if(first[i] < second[j]){
            mergedArr.push(first[i]);
            i=i+1;
        }else{
            mergedArr.push(second[j]);
            j=j+1;
        }
    }

    while(i<first.length){
        mergedArr.push(first[i]);
        i=i+1;
    }

    while(j<second.length){
        mergedArr.push(second[j]);
        j=j+1;
    }

    return mergedArr;
}

// a = mergeSort([8,4,9,2,3,12,10]);
// console.log(a);


//let arr = [8,4,9,2,3,12,10];
/*
 * Revise here
 * https://divyajyotiuk.hashnode.dev/sorting-part-2
 * Merge Sort in-place
 */
function mergeSortInPlace(a,s,e){
    console.log("mergeSort(",a,s,e,")");

    if(e-s == 1){
        return;
    }

    let m = s + parseInt((e-s)/2);

    mergeSortInPlace(a,s,m);
    mergeSortInPlace(a,m,e);

    // i -> start of first array
    // j -> start of second array
    let i=s,j=m;

    let mergedArr = [];
    while(i<m && j<e){
        if(arr[i] < arr[j]){
            mergedArr.push(arr[i]);
            i=i+1;
        }else{
            mergedArr.push(arr[j]);
            j=j+1;
        }
    }

    while(i<m){
        mergedArr.push(arr[i]);
        i=i+1;
    }

    while(j<e){
        mergedArr.push(arr[j]);
        j=j+1;
    }

    // 
    for(let k=0;k<mergedArr.length;k++){
        arr[s+k] = mergedArr[k];
    }
}

// let n = arr.length;
// mergeSortInPlace(arr,0,n);
// console.log(arr);


/**
 *
 * https://leetcode.com/problems/missing-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let index = 0;
    while(index < nums.length){
        let pos = nums[index];
        if(nums[index] != nums[pos] && nums[index] != nums.length){
            // place nums[index] in its correct position
            let temp = nums[pos]; // swap
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index=index+1;
        }
    }
    index = 0;
    while(index < nums.length){
        if(nums[index] != index){
            break;
        }
        index=index+1;
    }
    return index;
};


/**
 *
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    let index = 0;
    while(index < nums.length){
        let pos = nums[index] - 1;
        if(nums[index] != nums[pos]){
            let temp = nums[pos]; // swap
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index = index + 1;
        }
    }
    index = 0;
    let ans = [];
    while(index < nums.length){
        if(nums[index] != index+1){
            ans.push(index+1);
        }
        index=index+1;
    }
    return ans;
};

/**
 *
 * https://leetcode.com/problems/find-the-duplicate-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let index=0;
    while(index < nums.length){
        let pos = nums[index] - 1;
        if(nums[index] != nums[pos]){
            let temp = nums[pos];
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index = index + 1;
        }
    }
    index = 0;
    while(index < nums.length){
        if(nums[index] != index+1){
            break;
        }
        index = index + 1;
    }

    return nums[index];
};


/**
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let index=0;
    let ans=[];
    while(index < nums.length){
        let pos = nums[index]-1;
        if(nums[index]!=nums[pos]){ // if they are not duplicates
            let temp = nums[index];
            nums[index] = nums[pos];
            nums[pos] = temp;
        }else{
            index = index+1;
        }
    }
    index=0;
    while(index < nums.length){
        if(nums[index] != index+1){
            ans.push(nums[index]);
        }
        index = index+1;
    }
    return ans;
};


/**
 *
 * https://leetcode.com/problems/set-mismatch/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let index=0;
    while(index < nums.length){
        let pos = nums[index] - 1;
        if(nums[index]!=nums[pos]){
            let temp = nums[pos];
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index = index + 1;
        }
    }
    index=0;
    while(index < nums.length){
        if(nums[index]!=index+1){
            break;
        }
        index=index+1;
    }
    return [nums[index], index+1];
};

/**
 * LC Hard
 * https://leetcode.com/problems/first-missing-positive/
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let index=0;
    while(index < nums.length){
        let pos = nums[index]-1;
        // ignore -ve and numbers greater than nums.length
        if(nums[index] > 0 && nums[index] <= nums.length && nums[index]!=nums[pos] ){
            let temp = nums[pos];
            nums[pos] = nums[index];
            nums[index] = temp;
        }else{
            index = index+1;
        }
    }
    index=0;
    while(index < nums.length){
        if(nums[index] != index+1){
            break;
        }
        index = index + 1;
    }
    return index+1;
};
