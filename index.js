const { getSize, getInstructions } = require("./helpers/argvParse.js");
const Console = require("./classes/Console.js");
const Object = require("./classes/Object.js");
const Table = require("./classes/Table.js");

const size = getSize(process.argv);
const instructions = getInstructions(process.argv);

const t = new Table(size);
const o = new Object({});

// I would rather initiate this middleware style,
// using an array of fns and reduceRight
// However, weekend brain can't think properly
o.onMove = (move) => {
  try {
    if (!t.checkMove(move)) t.fellOutside();
    // if it didnt fall outside
    return [move.x, move.y];
  } catch {
    t.fellOutside();
  }
};

// run instructions
instructions.forEach((instruction) => {
  o.handleInstruction(instruction);
});

// print result
console.log(o.getPosition());

process.exit();
