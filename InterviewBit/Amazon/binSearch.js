/*
 * #1
 * https://www.interviewbit.com/problems/square-root-of-integer/
 */

//param A : integer
//return an integer
function sqrt(A){
    let s=0,e=A;
    if(A==0 || A==1) return A;

    while((e-s) > 1){
        let m = Math.floor((s+e)/2);
        let sqNum = m*m;
        if(sqNum == A){
            return m;
        }else if(sqNum > A){
            e=m;
        }else{
            s=m;
        }
    }
    return s;
 }


