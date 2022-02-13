function breakingRecords(scores) {
    var low = [];
    var high = [];
    var lcnt = 0, hcnt = 0;
    for (var i = 0; i < scores.length; i++){
        if (i === 0) {
            low.push(scores[i]);
            high.push(scores[i]);
        }
        else {
            if (scores[i] > Math.max(...high)) {
                high.push(scores[i]);
                hcnt++;
            }
            else {
                high.push(scores[i - 1]);
            }

            if (scores[i] < Math.min(...low)) {
                low.push(scores[i])
                lcnt++;
            }
            else {
                low.push(scores[i - 1]);
            }
        }
    }
    var res = [];
    res.push(hcnt); res.push(lcnt);
    return res; 
    
}