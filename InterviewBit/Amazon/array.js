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
