function segregate0And1(a){
    let n = a.length;
    let left = 0;
    let right = n-1;

    while(left < right){

        if(a[right] == 0 && a[left] == 1){
            let t = a[left];
            a[left] = a[right];
            a[right] = t;
            right--;
            left++;
        }

        if(a[left] == 0){
            left++;
        }

        if(a[right] == 1){
            right--;
        }
    }

    return a;
}

let arr = [0, 1, 0, 1, 0, 0, 1];
let ans = segregate0And1(arr)
console.log(ans);
