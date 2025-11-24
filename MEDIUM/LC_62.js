// LEETCODE 62
// Unique Paths

function uniquePaths (m, n) {
    console.log(m, n);
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    console.log("the DP is: " , dp, "Length:", dp.length);

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
        console.log("Inside Loop", dp[i][0]);
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
        console.log("Inside second Loop", dp[0][j]);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            console.log("Inside Final Loop", dp[i][j]);
        }
    }
    console.log("Ans is:", dp[m - 1][n - 1])
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));