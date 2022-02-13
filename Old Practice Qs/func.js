/*
Given a string S. Your task is to remove all duplicates characters from the string S

NOTE: 
1.) Order of characters in output string should be same as given in input string.
2.) String S contains only lowercase characters ['a'-'z'].

input:
Input contain a single string S.

Output:
Print the string S with no any duplicate characters.

Constraints: 
Test Files 1 to 5: 
1<=|S|<=100 
Test Files 6 to 10:
1<=|S|<=100000

Sample Output #1
hacker

Sample Output #1
hacker

Sample Input #2
hackerearth

Sample Output #2
hackert

Sample Input #3
programming

Sample Output #3
progamin

*/

func = (input) => {
    var s = input.split("");
	var map = new Map();
    for(var i=0;i<s.length;i++){
        map.set(s[i],true);
    }
    str = map.keys();
	var l = "";
	for(var j=0;j<map.size;j++){
		l += str.next().value;
    }
    return l;
}
