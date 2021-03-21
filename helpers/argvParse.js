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

  getInstructions: (argv) => {
    const result = argv
      .slice(4)
      .join("")
      .split(",")
      .map((x) => parseInt(x));
    return result;
  },
};
