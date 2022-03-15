/*
 * #1
 * https://www.interviewbit.com/problems/find-duplicate-in-array/
 */

 //param A : array of integers
 //return an integer
function repeatedNumber(A){
		let obj = {};
		for(let i=0;i<A.length;i++){
			obj[A[i]]=0;
		}
		let num = -1;
		for(let i=0;i<A.length;i++){
			obj[A[i]]++;
			if(obj[A[i]] > 1){
				num = A[i];
				break;
			}
		}
		return num;
}


/*
 * #2
 * https://www.interviewbit.com/problems/rotate-matrix/
 */

//param A : array of array of integers 
//return nothing 
// solution using extra space
function rotateMatrix(A){ 
	let B = [];
	
	for(let j=0;j<A[0].length;j++){
	    B[j] = [];
	    for(let i=A.length-1;i>=0;i--){
		B[j].push(A[i][j]);
	    }
	}

	for(let i=0;i<A.length;i++){
	    for(let j=0;j<A[0].length;j++){
		A[i][j] = B[i][j];
	    }
	}
} 
// optimized (swap along the diagonal)
// in place solution (no extra space)
function rotateMatrix(A){ 
	A = A.reverse();
	for(let i=0;i<A.length;i++){
		for(let j=0;j<i;j++){
 			let temp = A[i][j];
			A[i][j] = A[j][i];
			A[j][i] = temp;
		}
	}

}
   
