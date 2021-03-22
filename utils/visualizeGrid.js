module.exports = (t, move) => {
  /**
   * As just using the spread operator
   * won't make a deep copy of the
   * grid, I had to use this "hacky"
   * way to make a deep copy without
   * the reference to the original
   * array.
   *
   * In a future version this could potentially
   * show the path with arrows. But not today.
   */
  const vGrid = JSON.parse(JSON.stringify(t.grid));
  vGrid[move.y][move.x] = "X";
  console.log(vGrid);
};
