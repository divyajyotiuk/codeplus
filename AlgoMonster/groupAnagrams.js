/*
Input:
strs = ["eat" ,"tea", "tan", "ate", "nat", "bat"]

Output: 
[["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]

Time complexity - O(n * mlog(m))
n - length of the input array
m - length of the max len string element of array
 */
function groupAnagrams(strs) {
    let result = [];
    const obj = {};
    for(let i=0;i<strs.length;i++){ // n times
        let sortedStr = strs[i].split('').sort().join(''); // sort in mlog(m)
        if(!obj[sortedStr]){
            obj[sortedStr] = [];
        }
        obj[sortedStr].push(strs[i])
    }
    
    Object.keys(obj).forEach((ele)=>{
        let a = obj[ele];
        result.push(a.sort())
    })
    
    result = result.sort();
    
    return result;
}
