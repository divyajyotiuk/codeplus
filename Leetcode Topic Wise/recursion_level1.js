/* 
 * Revise here - https://divyajyotiuk.hashnode.dev/recursion-quick-breakdown
 * Warm up question -> Find the nth fibonacci number
 *
 * Recurrence relation -> Fib(n) = Fib(n-1) + Fib(n-2)
 */
function fibonacci(n){
    if(n<2){ // base condition - represented by answers we already have
        return n;     // in this case we know Fib(0)=0 and Fib(1)=1
    }
    return fibonacci(n-1) + fibonacci(n-2); // add the previous two numbers
}

let a;
/**
 * print n to 1
 */
function nToOne(n){
    if(n<1){
        return n;
    }
    console.log("nToOne(",n,")");
    nToOne(n-1);
}

//nToOne(5);

/**
 * print 1 to n
 */
 function oneToN(n,i=1){
    console.log("oneToN(",i,")");
    if(i==n){
        return n;
    }
    oneToN(n,i+1);
}

//oneToN(5);

/**
 * product of n to 1
 * factorial
 */
function factorial(n){
    console.log("factorial(",n,")");
    if(n<=0){
        return 1;
    }
    return n*factorial(n-1);
}

//a = factorial(0);
//console.log(a);

/**
 * sum of n to 1
 */
 function summation(n){
    console.log("summation(",n,")");
    if(n<=0){
        return n;
    }
    return n+summation(n-1);
}

// a = summation(5);
// console.log(a);

/**
 * sum of digits
 */
 function sumOfDigits(n){
    console.log("sumOfDigits(",n,")");
    if(n%10 == n){
        return n;
    }

    return n%10 + sumOfDigits(parseInt(n/10));
}

// a = sumOfDigits(13423);
// console.log(a);

/**
 * product of digits
 */
 function prodOfDigits(n){
    console.log("prodOfDigits(",n,")");
    if(n%10 == n){
        return n;
    }

    return n%10 * prodOfDigits(parseInt(n/10));
}

// a = prodOfDigits(12345);
// console.log(a);

/**
 * Method 1: reverse a number
 * works for number ending with 0s - gives exact string
 */
 function reverse1(n){
    console.log("reverse(",n,")");
    if(n == 0){
        return '';
    }

    return n%10 + reverse1( parseInt(n/10) );
}

// a = reverse1(345601000);
// console.log(a);

/**
 * Method 2: reverse a number
 * 0s in the end are ignored
 */
 function reverse2(n){
    console.log("reverse(",n,")");
    let digits = parseInt( Math.log10(n))+1; // ** for calculating number of digits
    if(n%10 == n){ // if only 1 digit remaining
        return n;
    }

    return (n%10)*Math.pow(10,digits-1) + reverse2( parseInt(n/10) );
}

// a = reverse2(3456010);
// console.log(a);

/**
 * palindrome number
 * returns {boolean}
 */

function isPalindrome(n){
    return n == reverse2(n);
}

// a = isPalindrome(12321);
// b = isPalindrome(12345);
// console.log(a,b);

function reverseString(str){
    console.log("reverse(",str,")");
    if(str.length == 1){ // if only 1 char remaining
        return str; // return char
    }
                            //*imp* substring
    return reverseString(str.substring(1)) + str[0];
}

// let a = reverseString('abcd',0);
// console.log(a);

/**
 * palindrome string
 * returns {boolean}
 */

function isPalindrome(str){
    return str == reverseString(str);
}

// a = isPalindrome('abcba');
// b = isPalindrome('abcda');
// console.log(a,b);

/**
 * count zeros in the number
 * @param {Number} n 
 * @returns {Number}
 */
function countZeros(n,c){
    console.log("countZeros(",n,")");
    
    if(n%10 == n){
        return c;
    }

    if((n%10) == 0){
        c = c + 1;
    }

    return countZeros(parseInt(n/10),c);
}

// a = countZeros(102030000400,0);
// console.log(a);

/**
 * LC easy
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
 *
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(num == 0) return 0;
    
    if(num%2 == 0){
        num = parseInt(num/2);
    }else{
        num = num - 1;
    }
    
    return 1 + numberOfSteps(num);
};

/**
 * check if array is sorted
 */
function isSortedArray(arr,i=0){
    console.log("isSortedArray(",arr[i],arr[i+1],")");
    
    if(i == arr.length-1){
        return true;
    }

    return (arr[i] < arr[i+1]) && isSortedArray(arr,i+1);
}

// a = isSortedArray([1,2,3,6,8]);
// console.log(a);

/**
 * linear search using recursion
 */
function linearSearch(arr,target,i=0){
    console.log("linearSearch(",arr[i],")");
    
    if(arr[i] == target){
        return i;
    }

    if(arr.length == 0 || i == arr.length - 1){
        return -1;
    }

    return linearSearch(arr,target,i+1);
}

// a = linearSearch([1,2,3,6,8],8);
// console.log(a);

/**
 * linear search using recursion
 * array with duplicates
 */
function findAllIndices(arr,target,i=0,ans=[]){
    console.log("findAllIndices(",ans,")");
    
    if(arr[i] == target){
        ans.push(i);
    }

    if(arr.length == 0 || i == arr.length - 1){
        return ans;
    }

    return findAllIndices(arr,target,i+1,ans);
}

// a = findAllIndices([1,3,4,3,2,6,7,8],3,0);
// console.log(a);

/*
 * search in rotated binary search
 */
function search(a,target,s,e){

    let m = s + parseInt( (e-s)/2 );

    console.log("search(",s,e,m,")");

    if(a[m] == target) return m;
    if(a[s] == target) return s;
    if(a[e] == target) return e;

    if(a[m] < a[m+1]){  // either left or right side of pivot
        if(a[s] < a[m] && a[e] < a[m]){ // completely left side of pivot
            if(target > a[s] && target < a[m]){ // target lies in the left
                return search(a,target,s,m-1);
            }else{ // target not on the left side
                return search(a,target,m+1,e); // move to the right
            }
        }else if(a[e] > a[m] && a[s] > a[m]){ // completely right side of pivot
            if(target > a[m] && target < a[e]){ // target lies in the right
                return search(a,target,m+1,e);
            }else{ // target not on the right side
                return search(a,target,s,m-1); // move to the left
            }
        }else if(a[m] > a[s] && a[m] < a[e]){
            if(target > a[s] && target < a[m]){ // target lies in the left
                return search(a,target,s,m-1);
            }else{ // target not on the left side
                return search(a,target,m+1,e); // move to the right
            }
        }
    }else if(a[m] > a[m+1]){ // at the pivot
        if(target > a[s] && target < a[m]){ // target lies in the left
            return search(a,target,s,m-1);
        }else{
            return search(a,target,m+1,e); // target lies in the right
        }
    }

    return -1;

}


// a = search([5,6,7,8,9,1,2,3],6,0,7);
// a = search([6,7,8,9,1,2,3,4,5],1,0,8);
// console.log(a , " position");


/*
 * Skip a character
 */
function skipACharacter(str,char){
    console.log("skipACharacter(",str,")");
    if(str.length == 0){ // string is processed
        return "";
    }

    if(str[0]!=char){
        return str[0] + skipACharacter(str.substring(1),char);
    }else{
        return skipACharacter(str.substring(1),char);
    }
}

// a = skipACharacter("baccad","a");
// console.log(a);



