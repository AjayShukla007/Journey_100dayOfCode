function minimumMoves(grid) {
  // Initialize arrays to store positions of zeros 'left' and non-zeros 'right'.
    const zeroPositions = [];
    const nonzeroPositions = [];

    // Loop over the grid to fill the zeroPositions and nonzeroPositions arrays.
    for (let row = 0; row < 3; ++row) {
        for (let col = 0; col < 3; ++col) {
            if (grid[row][col] === 0) {
                zeroPositions.push([row, col]);
            } else {
                for (let count = 1; count < grid[row][col]; ++count) {
                    nonzeroPositions.push([row, col]);
                }
            }
        }
    }

    // Helper function to calculate the Manhattan distance between two points.
    const calculateDistance = (pointA, pointB) => {
        return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
    };

    // The number of zeros in the grid.
    const zeroCount = zeroPositions.length;

    // Initialize the DP table with high values (much like infinity).
    const dp = Array(1 << zeroCount).fill(1 << 30);

    // Base case: no moves required when there are no zeros.
    dp[0] = 0;

    // Loop over all subsets of zeros.
    for (let i = 0; i < 1 << zeroCount; ++i) {
        let setBitsCount = 0;

        // Count how many bits are set in the current subset.
        for (let bit = 0; bit < zeroCount; ++bit) {
            if ((i >> bit) & 1) {
                ++setBitsCount;
            }
        }

        // Try moving each zero to its corresponding non-zero position.
        for (let pos = 0; pos < zeroCount; ++pos) {
            if ((i >> pos) & 1) {
                dp[i] = Math.min(dp[i], dp[i ^ (1 << pos)] + calculateDistance(zeroPositions[setBitsCount - 1], nonzeroPositions[pos]));
            }
        }
    }

    // Return the minimum moves required to assign each zero to a non-zero position.
    return dp[(1 << zeroCount) - 1];
}
