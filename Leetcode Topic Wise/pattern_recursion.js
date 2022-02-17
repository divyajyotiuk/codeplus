/*
Pattern - 
--------------
* * * *
* * *
* *
*
--------------
*/

function patternTriangle(n){

    console.log("patternTriangle(",n,")");

    if(n==0) return "";

    let print = "";
    for(let i=0; i<n;i++){
        print = print.concat("* ");
    }

    return print + "\r\n" + patternTriangle(n-1);
}

a = patternTriangle(4);
console.log(a);

