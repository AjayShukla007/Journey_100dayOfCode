function minimumSumTotal(triangle) {
  for (let row = triangle.length - 2; row > -1; row--)
    for (let col = 0; col < triangle[row].length; col++)
      triangle[row][col] += Math.min(
        triangle[-~row][col],
        triangle[-~row][-~col]
      );
  return triangle[0][0];
}
