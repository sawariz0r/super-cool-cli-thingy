
const Object = require("./models/Object.js");
const Table = require("./models/Table.js");
const Console = require("./models/console.js");

const visualizeGrid = require("./utils/visualizeGrid.js");
const { parse: parseInstruction } = require("./utils/instructions");
const {
  getSize,
  getInstructions,
  getStartPos,
} = require("./utils/argvParse.js");

const size = getSize(process.argv);
const instructions = getInstructions(process.argv);
const startingPos = getStartPos(process.argv);

const c = new Console();
const t = new Table(size);
const o = new Object({ position: startingPos });

// I would rather initiate this middleware style,
// using an array of fns and reduceRight
// However, weekend brain can't think properly
o.onMove = (move) => {
  /**
   * Created a super simple
   * way to visualize the 
   * steps taken.
   * If I had more time I would
   * have loved to make this
   * prettier.
   * Uncomment the line under 
   * to see it in action!
   */
  //visualizeGrid(t, move)

  try {
    if (!t.checkMove(move)) t.fellOutside();
    // if it didnt fall outside
    return [move.x, move.y];
  } catch {
    t.fellOutside();
  }
};

/**
 * On to the main part of the program!
 */
const hasInstructions = instructions.length > 0;

/**
 * If the instructions were provided when
 * running the program in the cli,
 * then we skip the asking step and just
 * power through the instructions 
 * eg. "node index.js 4, 4, 1, 1, 3, 1, 1"
 */
if (hasInstructions) {
  o.handleInstructions(instructions);

  // Prints the result
  console.log(o.getPosition());

  // end of program
  process.exit();
}

/**
 * If the instructions were NOT provided when
 * running the program in the cli,
 * then we ask for the instructions
 * eg. "node index.js 4, 4, 1, 1"
 * CLI: "What's your instructions, sir?"
 * - WAITING FOR INPUT - 
 * user types: 3, 1, 3, 1, 2
 */
if (!hasInstructions) {
  c.ask("What's your instructions, sir?")
    .then((instructions) => parseInstruction(instructions))
    .then((instructions) => {
      o.handleInstructions(instructions);

      // Prints the result
      console.log(o.getPosition());

    // end of program
      process.exit();
    });
}
