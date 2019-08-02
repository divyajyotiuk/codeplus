//no better solutions

function climbingLeaderboard(scores, alice) {
    
    var res = [];
    for (var l = 0; l < alice.length; l++){
        var arr = scores;
        arr = arr.concat(alice[l]).sort((a, b) => b - a);
        var temp = arr[0];
        var rank = new Map();
        var r = 1;
        rank.set(arr[0],r);
        for (var i = 1; i < arr.length; i++) {
            if (temp !== arr[i]) {
                temp = arr[i];
                r++;
            }
                rank.set(arr[i],r);  
        }
     res.push(rank.get(alice[l]));
    }
    return res;
}

//code doesn't face up to the constraints. Needs to be changed. 

function climbingLeaderboard(scores, alice) {
    var rank = new Map();
    var res = [];
    var temp = scores[0];
    var r = 1;
    rank.set(scores[0], r);  
    for (var i = 0; i < scores.length; i++){
        if (temp !== scores[i]) {
            temp = scores[i];
            r++;
            rank.set(scores[i], r);  
        }
    }
    var revAlice = alice.reverse(); 
    for (var j = 0; j < revAlice.length; j++){
        var key = rank.keys();
        
        for (var k = 0; k <= rank.size; k++){
            temp = key.next().value;
            if (revAlice[j] >= temp) {
                r = rank.get(temp);
                res.push(r);
                break;
            }
            else {
                if (temp === undefined) {
                    r = rank.get(prev);
                    res.push(r + 1);
                }
            }
            var prev = temp;
        }
    }
          
    return res.reverse();
}

//short version - pipelining

function climbingLeaderboard(scores, alice) {

    var res = [];
    for (var i = 0; i < alice.length; i++){
        var arr = scores;
        var val = arr.concat(alice[i]).sort((a, b) => b - a).filter((elem, index, self) => { return index == self.indexOf(elem) }).findIndex((elem) => { return elem <= alice[i] });

        if (val === -1) {
            res.push(scores.length);
        }
        else {
            res.push(val+1);
        }
    }
    return res;
   
}

//binSearch
var binarySearch = (d, t, s, e) => {
    const m = Math.floor((s + e) / 2);
    if (t == d[m]) return m + 1;
    else if (t > d[0]) return 1;
    else if (t < d[d.length - 1]) return d.length + 1;
    else if (e - 1 === s) return e+1;
    else if (t < d[m]) return binarySearch(d, t, m, e);
    else if (t > d[m]) return binarySearch(d, t, s, m);
   
    
}
// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {

    var res = [];

    var arr = scores.filter((elem, index, self) => { return index == self.indexOf(elem) });
    
    for (var i = 0; i < alice.length; i++){
        res[i] = binarySearch(arr, alice[i], 0, arr.length - 1);

    }
   
    return res;
   
}
