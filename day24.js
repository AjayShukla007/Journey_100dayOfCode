function largestPrime() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var i = 2;
        while (i <= Math.floor(Math.sqrt(n))) {
        if (n % i === 0) {
            n /= i;
        } else {
            i++;
        }
    }
    console.log(n);
    }  
}

function evenFibonacciSum(limit) {
    let a = 1, b = 1, total = 0;
    while (a <= limit) {
        if (a % 2 === 0) {
            total += a;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return total;
}