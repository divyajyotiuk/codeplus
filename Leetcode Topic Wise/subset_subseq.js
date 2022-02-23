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

ans = iterativeSubset([1,2,3]);
console.log(ans); // [[],[1], [2], [3], [1,2], [2,3], [1,3], [1,2,3]]


function iterativeSubsetWithDuplicates(unprocessedArr=[]){
    let processedArr = [];

    // process 1st element
    if(unprocessedArr.length > 0){
        processedArr.push([]) // push empty
    }

    for(let i=0;i<unprocessedArr.length;i++){
        let copyOfProcessed = [];

        if(i>0 && unprocessedArr[i] == unprocessedArr[i-1]){ // sort the array for this to work
             // don't copy the whole array 
            copyOfProcessed = [...processedArr.slice(parseInt(processedArr.length/2))];
        }else{
            copyOfProcessed = [...processedArr];
        }
        
        for(let j=0;j<copyOfProcessed.length;j++){
            copyOfProcessed[j] = copyOfProcessed[j].concat([unprocessedArr[i]]);
        }
        processedArr = processedArr.concat(copyOfProcessed);
    }

    return processedArr;
}

ans = iterativeSubsetWithDuplicates([1,2,2]);
console.log(ans); //[ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 2, 2 ], [ 1, 2, 2 ] ]


