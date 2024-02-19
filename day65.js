const hasAltarnatingBits = n => {
  let output = true;
    let cur, prev;
    const bit = n.toString(2);
    for (let i = 0; i < bit.length; i++) {
        cur = bit[i];
        prev = bit[i + 1];
        cur !== prev ? output : output = false;
    }
    console.log(output);
    return output
};
