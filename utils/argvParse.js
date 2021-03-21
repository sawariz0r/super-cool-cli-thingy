module.exports = {
  getSize: (argv) => {
    const result = argv
      .slice(2, 4)
      .join("")
      .split(",")
      .slice(0, 2)
      .map((x) => parseInt(x));
    return { height: result[1], width: result[0] };
  },
  getStartPos: (argv) => {
    const result = argv.slice(4, 6)
    .join("")
    .split(",")
    .map((x) => parseInt(x));
    return { x: result[0], y: result[1] }
  },

  getInstructions: (argv) => {
    const result = argv
      .slice(6)
      .join("")
      .split(",")
      .map((x) => parseInt(x));
    return result;
  },
};
