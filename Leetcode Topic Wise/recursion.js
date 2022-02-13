/* 
 * Revise here - https://divyajyotiuk.hashnode.dev/recursion-quick-breakdown
 * Warm up question -> Find the nth fibonacci number
 *
 * Recurrence relation -> Fib(n) = Fib(n-1) + Fib(n-2)
 */
function fibonacci(n){
    if(n==1 || n==0){ // base condition - represented by answers we already have
        return n;     // in this case we know Fib(0)=0 and Fib(1)=1
    }
    return fibonacci(n-1) + fibonacci(n-2); // add the previous two numbers
}
