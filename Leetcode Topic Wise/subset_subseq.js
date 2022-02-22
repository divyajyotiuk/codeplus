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

ans = subsequence("","abc");
console.log(ans);
