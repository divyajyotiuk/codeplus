/**
 * Bubble sort using recursion
 */

function recursiveBubbleSort(a,i,j){

    console.log("recursiveBubbleSort(",a,i,j,")");

    if(i == 0) return a;

    if(a[j-1] > a[j]){
        let temp = a[j-1];
        a[j-1] = a[j];
        a[j] = temp;
    }

    if(j==i){ // you have placed the largest element in its correct position 
        return recursiveBubbleSort(a,i-1,1);
    }

    return recursiveBubbleSort(a,i,j+1);
}

// a = recursiveBubbleSort([4,5,1,2,3],4,1);
// console.log(a);
