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


/**
 * selection sort using recursion
 */

function recursiveSelectionSort(a,i,j,min){

    console.log("recursiveSelectionSort(",a,i,j,")");

    if(i == a.length-1) return a;

    if(a[j] < a[min]){
        min = j;
    }

    if(j < a.length-1){
        return recursiveSelectionSort(a,i,j+1,min);
    }

    // swap
    let temp = a[i];
    a[i] = a[min];
    a[min] = temp;

    return recursiveSelectionSort(a,i+1,i+2,i+1);
}

// a = recursiveSelectionSort([4,5,1,2,3],0,1,0);
// console.log(a);
