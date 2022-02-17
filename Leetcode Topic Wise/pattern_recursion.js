/*
Pattern - 
--------------
* * * *
* * *
* *
*
--------------
*/

function patternTriangleInverted(r,c=0){

    console.log("patternTriangleInverted(",r-1,c,")");

    if((r-1) == 0) return "*";

    if(c < (r-1) ){
        return "* " + patternTriangleInverted(r,c+1);
    }else{
        return  "*" + "\r\n" + patternTriangleInverted(r-1,0);
    }
}

// a = patternTriangleInverted(4);
// console.log(a);

/*
Pattern - 
--------------
*
* * 
* * *
* * * *
--------------
*/

function patternTriangle(r,c=0){

    console.log("patternTriangle(",r-1,c,")");

    if((r-1) == 0) return "*";

    if(c < (r-1) ){
        return patternTriangle(r,c+1) + " *";
    }else{
        return patternTriangle(r-1,0) + "\r\n" + "*";
    }
}

// a = patternTriangle(4);
// console.log(a);
