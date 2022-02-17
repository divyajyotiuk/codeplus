/*
Pattern - 
--------------
* * * *
* * *
* *
*
--------------
*/

function patternTriangle(r,c=0){

    console.log("patternTriangle(",r,c,")");

    if( (r-1) == 0) return "*";

    if(c < r-1){
        return "* " + patternTriangle(r,c+1);
    }else{
        return  "*" + "\r\n" + patternTriangle(r-1,0);
    }
}

a = patternTriangle(4);
console.log(a);

