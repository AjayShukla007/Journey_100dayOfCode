const pyramidTransition = (bottom, allowed) => {
  const prefixToBlocks = new Map();

  allowed.forEach(a => {
    const lowerBlocks = a.substring(0, 2);
    if (!prefixToBlocks.has(lowerBlocks)) {
      prefixToBlocks.set(lowerBlocks, []);
    }
    prefixToBlocks.get(lowerBlocks).push(a.charAt(2));
  });

  function dfs(row, nextRow, i) {
    if (row.length === 1) {
      return true;
    }
    if (nextRow.length + 1 === row.length) {
      return dfs(nextRow, "", 0);
    }

    const prefix = row.substring(i, i + 2);

    if (prefixToBlocks.has(prefix)) {
      for (const c of prefixToBlocks.get(prefix)) {
        if (dfs(row, nextRow + c, i + 1)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(bottom, "", 0);
};

// Example usage:
// const result = pyramidTransition("XYZ", ["XYD", "YZE", "DEA", "FFF"]);
// console.log(result);
