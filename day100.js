// this is an optimal solution and pass all the test cases of leetcode

function alternateDigitSum(n) {
  // Initialize the accumulator for the alternating sum of digits
  let accumulatedSum = 0;

  // Variable to track whether to add or subtract the current digit
  let sign = 1;

  // Continue the process until all digits have been processed
  while (n) {
    // Add or subtract the current rightmost digit based on the sign and update the accumulated sum
    accumulatedSum += (n % 10) * sign;

    // Switch the sign for the next iteration
    sign = -sign;

    // Remove the rightmost digit to process the next one
    n = Math.floor(n / 10);
  }

  // Return the final accumulated sum after adjusting the sign back
  // The multiplication by `-sign` is used to negate the sum correctly based on the last iteration's sign
  return accumulatedSum * -sign;
}
