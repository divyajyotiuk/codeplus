/*You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

For example, given the arrays  and , there are two numbers between them:  and . , ,  and  for the first value. Similarly, ,  and , .

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

a: an array of integers
b: an array of integers
Input Format

The first line contains two space-separated integers,  and , the number of elements in array  and the number of elements in array . 
The second line contains  distinct space-separated integers describing  where . 
The third line contains  distinct space-separated integers describing  where .

Constraints

Output Format

Print the number of integers that are considered to be between  and .

Sample Input

2 3
2 4
16 32 96
Sample Output

3
Explanation

2 and 4 divide evenly into 4, 8, 12 and 16. 
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/

function allZeroes(curr)
{
    return curr == 0;
}

function getTotalX(a, b) {
    var num1 = Math.min(...a);
    var num2 = Math.min(...b);
    var cnt = 0;
    var arr = [],barr1 =[],barr2=[];
    for (var i = num1 ; i <= num2; i++){
        barr1 = a.map(x => i % x);
        if (barr1.every(allZeroes)) {
            arr.push(i);
        }
    }
    for (var j = 0; j < arr.length; j++){
        barr2 = b.map(x => x % arr[j]);
        if (barr2.every(allZeroes)) {
            cnt++;
        }
    }
    return cnt;
}