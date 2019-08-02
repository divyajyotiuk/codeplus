function countingValleys(n, s) {
    var arr = s.split('');
    var ht = 0,count=0, flag=false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 'D') {
            ht--;
        }
        else {
            ht++;
        }

        if (ht < 0 && flag === false)
        {
            count++;
            flag = true;
        } else if(ht===0){
            flag = false;
        }
    }
    return count;
}