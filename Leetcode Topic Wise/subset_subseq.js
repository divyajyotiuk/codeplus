/*
 * Subsequence using recursion
 * Visualisation - https://divyajyotiuk.hashnode.dev/subsetsubsequence-pattern
 */
function subsequence(processedStr, unprocessedStr, arr=[]){
    console.log("subsequence( ",processedStr,",",unprocessedStr,",",arr," )");

    if(unprocessedStr.length == 0){
        return;
    }

    // include the unprocessedStr[0] in processedStr
    // move ahead
    subsequence(processedStr + unprocessedStr[0],unprocessedStr.substring(1),arr);
    arr.push(processedStr + unprocessedStr[0]);

    // ignore the unprocessedStr[0], send processedStr as is forward
    subsequence(processedStr,unprocessedStr.substring(1),arr);

    return arr;
}

// ans = subsequence("","abc");
// console.log(ans);

/*
 * Subsequence with Ascii using recursion
 */
function subsequenceWithAscii(processedStr, unprocessedStr, arr=[]){
    console.log("subsequenceWithAscii( ",processedStr,",",unprocessedStr,",",arr," )");

    if(unprocessedStr.length == 0){
        return;
    }

    // include the unprocessedStr[0] in processedStr
    // move ahead
    subsequenceWithAscii(processedStr + unprocessedStr[0],unprocessedStr.substring(1),arr);
    arr.push(processedStr + unprocessedStr[0]);

    // ignore the unprocessedStr[0], send processedStr as is forward
    subsequenceWithAscii(processedStr,unprocessedStr.substring(1),arr);

    // include the ascii of unprocessedStr[0] in processedStr
    let withAscii = unprocessedStr.charCodeAt(0);
    subsequenceWithAscii(processedStr + withAscii, unprocessedStr.substring(1), arr);
    arr.push(processedStr + withAscii);

    return arr;
}

// ans = subsequenceWithAscii("","abc");
// console.log(ans);


function iterativeSubset(unprocessedArr=[]){
    let processedArr = [];

    // start with empty array
    if(unprocessedArr.length > 0){
        processedArr.push([]) // push empty array
    }

    for(let i=0;i<unprocessedArr.length;i++){ // for every pass #subsets gets doubled
        let copyOfProcessed = [...processedArr];
        for(let j=0;j<copyOfProcessed.length;j++){
            copyOfProcessed[j] = copyOfProcessed[j].concat([unprocessedArr[i]]);
        }
        processedArr = processedArr.concat(copyOfProcessed);
    }

    return processedArr;
}

// ans = iterativeSubset([1,2,3]);
// console.log(ans); // [[],[1], [2], [3], [1,2], [2,3], [1,3], [1,2,3]]

/*
 * When you find a duplicate element, then only copy the
 * newly created subsets of the previous step
 * 
 * sort the array for this to work
 * not possible inputs - [1,2,3,2]
 */
function iterativeSubsetWithDuplicates(unprocessedArr=[]){
    let processedArr = [];

    // process 1st element
    if(unprocessedArr.length > 0){
        processedArr.push([]) // push empty
    }

    let start = 0, end = 0;
    for(let i=0;i<unprocessedArr.length;i++){
        let copyOfProcessed = [];

        if(i>0 && unprocessedArr[i] == unprocessedArr[i-1]){ // sort the array for this to work
            // don't copy the whole array 
            start = end + 1;
            copyOfProcessed = [...processedArr.slice(start)];
        }else{
            copyOfProcessed = [...processedArr];
        }
        end = processedArr.length - 1;
        for(let j=0;j<copyOfProcessed.length;j++){
            copyOfProcessed[j] = copyOfProcessed[j].concat([unprocessedArr[i]]);
        }
        processedArr = processedArr.concat(copyOfProcessed);
    }

    return processedArr;
}

// ans = iterativeSubsetWithDuplicates([1,2,2]);
// console.log(ans); //[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 2, 2 ], [ 1, 2, 2 ] ]


/*
 * Permutations - recursive variation 1
 * update outside Array
 */
let arr = [];
function permutations(processedStr='',unprocessedStr=''){
    console.log("permutations : ",processedStr,",",unprocessedStr);
    if(unprocessedStr.length == 0){
        arr.push(processedStr);
        return;
    }

    // recursion calls increase with increase in processed string
    for(let i=0;i<=processedStr.length;i++){ 
        // note this
        let newString = processedStr.slice(0,i) + unprocessedStr[0] + processedStr.slice(i,processedStr.length);
        permutations(newString, unprocessedStr.substring(1));
    }

}

// permutations("","abc");
// console.log(arr);


/*
 * Permutations - recursive variation 2
 * return array from function itself
 */
function permutations(processedStr='',unprocessedStr=''){
    console.log("permutations : ",processedStr,",",unprocessedStr);
    if(unprocessedStr.length == 0){
        let arr = [];
        arr.push(processedStr);
        return arr;
    }

    let a = [];
    // recursion calls increase with increase in processed string
    for(let i=0;i<=processedStr.length;i++){ 
        let newString = processedStr.slice(0,i) + unprocessedStr[0] + processedStr.slice(i,processedStr.length);
        a = a.concat( permutations(newString, unprocessedStr.substring(1)) );
    }

    return a;
}

// let ans = permutations("","abc");
// console.log(ans);


/**
 * permutation count of the string without taking a factorial of length of string
 */
function permutationsCount(processedStr='',unprocessedStr=''){
    console.log("permutationsCount : ",processedStr,",",unprocessedStr);
    if(unprocessedStr.length == 0){
        return 1; // for adding all the 1s
    }

    let count = 0;
    // recursion calls increase with increase in processed string
    for(let i=0;i<=processedStr.length;i++){ 
        let newString = processedStr.slice(0,i) + unprocessedStr[0] + processedStr.slice(i,processedStr.length);
        count = count + permutationsCount(newString, unprocessedStr.substring(1));
    }

    return count;
}

// let ans = permutationsCount("","abc");
// console.log(ans);
