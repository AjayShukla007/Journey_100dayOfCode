// this is an optimal solution and pass all the test cases of leetcode

const findDelayedArrivalTime = (arrivalTime, delayedTime) => {
  return (arrivalTime + delayedTime) % 24;
};
