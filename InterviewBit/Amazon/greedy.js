/*
 * #1
 * https://www.interviewbit.com/problems/gas-station/
 */

 //param A : array of integers
 //param B : array of integers
 //return an integer
function canCompleteCircuit(A, B){
        let totalGas=0,currGas=0,ansIndex=0;
        for(let i=0;i<A.length;i++){
            totalGas = totalGas + (A[i]-B[i]);
            currGas = currGas + (A[i]-B[i]);
            if(currGas < 0){
                currGas = 0;
                ansIndex = i+1;
            }
        }

        return totalGas < 0 ? -1 : ansIndex;
	}

/*
 * #2
 * https://www.interviewbit.com/problems/majority-element/
 */

 //param A : array of integers
 //return an integer
function majorityElement(A){
        let majorityParam = Math.floor((A.length/2));
        let obj = {};
        for(let i=0;i<A.length;i++){
            obj[A[i]] = 0;
        }
        let num = A[0];
        for(let i=0;i<A.length;i++){
            obj[A[i]] = obj[A[i]] + 1;
        }
        Object.keys(obj).forEach((ele,index)=>{
            if(obj[ele] > majorityParam){
                num = ele;
            }
        })

        return num;

	}

