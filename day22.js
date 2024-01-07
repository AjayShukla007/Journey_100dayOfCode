// geeks for geeks min time
class Solution {
    minTime(n, locations, types) {
        let mx = types[0];
        for (let i = 1; i < n; i++) {
            mx = Math.max(mx, types[i]);
        }

        let tmp = new Array(mx + 1).fill().map(() => new Array(2).fill(0));

        for (let i = 0; i < mx + 1; i++) {
            tmp[i][0] = Infinity;
            tmp[i][1] = -Infinity;
        }

        for (let i = 0; i < n; i++) {
            let inVal = types[i];
            tmp[inVal][0] = Math.min(tmp[inVal][0], locations[i]);
            tmp[inVal][1] = Math.max(tmp[inVal][1], locations[i]);
        }

        let arr = [];
        for (let i = 0; i < mx + 1; i++) {
            if (tmp[i][0] !== Infinity) {
                arr.push([tmp[i][0], tmp[i][1]]);
            }
        }

        this.dp = new Array(arr.length + 1).fill().map(() => new Array(3).fill(-1));

        return this.fun(0, arr, 2);
    }

    fun(i, arr, pos) {
        if (i === arr.length) {
            return Math.abs(arr[i - 1][pos]);
        }

        if (this.dp[i][pos] !== -1) {
            return this.dp[i][pos];
        }

        let x = 0;
        if (pos === 0) {
            x = arr[i - 1][0];
        } else if (pos === 1) {
            x = arr[i - 1][1];
        }

        let minVal = arr[i][0];
        let maxVal = arr[i][1];

        if (maxVal <= x) {
            return this.dp[i][pos] = x - minVal + this.fun(i + 1, arr, 0);
        } else if (minVal >= x) {
            return this.dp[i][pos] = maxVal - x + this.fun(i + 1, arr, 1);
        } else {
            let option1 = 2 * (x - minVal) + (maxVal - x) + this.fun(i + 1, arr, 1);
            let option2 = 2 * (maxVal - x) + (x - minVal) + this.fun(i + 1, arr, 0);
            return this.dp[i][pos] = Math.min(option1, option2);
        }
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let locations = readLine().split(' ').map(x => parseInt(x));
        let types = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.minTime(n, locations, types);
        console.log(res);
    }
}