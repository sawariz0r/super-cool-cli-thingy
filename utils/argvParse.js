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
    const startPos = argv.slice(4, 6);
    console.log(startPos);
    if (startPos.length === 0) return [];

    const result = startPos
      .join("")
      .split(",")
      .map((x) => parseInt(x));
    return { x: result[0], y: result[1] };
  },
  getInstructions: (argv) => {
    const instructions = argv.slice(6);
    if (instructions.length === 0) return [];

    const result = instructions
      .join("")
      .split(",")
      .map((x) => parseInt(x));
    return result;
  },
};
