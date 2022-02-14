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
