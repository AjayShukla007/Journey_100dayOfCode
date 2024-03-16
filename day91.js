function maxOperations(nums, k) {
  const numCount = new Map();
    let count = 0;

    // Count occurrences of each number
    for (const num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }

    // Iterate through unique numbers
    for (const [num, freq] of numCount.entries()) {
        const complement = k - num;

        // If complement exists and is not the same as num
        if (numCount.has(complement) && num !== complement) {
            // Count operations possible with the pair
            const operations = Math.min(freq, numCount.get(complement));
            count += operations;
            // Since pairs are counted, reduce the frequency of both numbers
            numCount.set(num, freq - operations);
            numCount.set(complement, numCount.get(complement) - operations);
        }
    }

    return count;
}
