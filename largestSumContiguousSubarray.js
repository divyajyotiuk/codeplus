/* Kadane's Algorithm */

/*
Geeks for Geeks - https://www.geeksforgeeks.org/largest-sum-contiguous-subarray 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;
    
    for(let i=0; i<nums.length; i++){
        maxEndingHere = maxEndingHere + nums[i];
        
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
        
        if(maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }
    
    return maxSoFar;
};
