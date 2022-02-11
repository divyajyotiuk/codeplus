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
        if(nums[index] != nums[nums[index]] && nums[index] != nums.length){ // ignore the index which cannot be positioned
            let temp = nums[nums[index]]; // swap
            nums[nums[index]] = nums[index];
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
