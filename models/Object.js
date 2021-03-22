class Object {
  constructor({
    position = { x: 0, y: 0 },
    direction = 0,
    directions = ["north", "east", "south", "west"],
  }) {
    this.position = position;

    // Made sense to have this as a number,
    // to easily just "add- or subtract-rotate"
    // in case you'd want to use other direction names
    // or later somehow add more directions
    this.direction = direction;
    this.directions = directions;

    /**
     * This puts a default behavior
     * on the move methods and is
     * overwritten in the index.js.
     * However, I initially planned to
     * initialize the Middleware class here
     * to be able to run them in the
     * move methods.
     */
    this.onMove = (move) => move;
  }

  getDirection() {
    const { direction, directions } = this;
    return directions[direction];
  }

  getPosition() {
    return [this.position.x, this.position.y];
  }

  /**
   * As mentioned above, this rotates clockwise
   * by using the length of the directions array
   * and goes back to 0 in case you reach the end
   */
  rotateClockwise() {
    const { direction, directions } = this;
    const endOfDirections = directions.length - 1;

    if (direction === endOfDirections) {
      this.direction = 0;
      return;
    }
    this.direction = direction + 1;
  }

  /**
   * Same was as the clockwise,
   * but the other way around
   */
  rotateCounterClockwise() {
    const { direction, directions } = this;
    const endOfDirections = directions.length - 1;

    if (direction === 0) {
      this.direction = endOfDirections;
      return;
    }
    this.direction = direction - 1;
  }

  /**
   * I tried to implement something
   * where the direction could be
   * depending on the directions Array,
   * however - this was trickier than I
   * thought.
   */
  moveForward() {
    // figure out the direction
    const dir = this.directions[this.direction];
    // north: -y, east: +x, south: +y, west: -x
    switch (dir) {
      case "north":
        this.position = { ...this.position, y: this.position.y - 1 };
        break;
      case "east":
        this.position = { ...this.position, x: this.position.x + 1 };
        break;
      case "south":
        this.position = { ...this.position, y: this.position.y + 1 };
        break;
      case "west":
        this.position = { ...this.position, x: this.position.x - 1 };
        break;
    }

    return this.onMove(this.position);
  }

  /**
   * Same as forward, but the other way. ;)
   */

  moveBackward() {
    // figure out the direction
    const dir = this.directions[this.direction];
    // north: +y, east: -x, south: -y, west: +x
    // return next move
    switch (dir) {
      case "north":
        this.position = { ...this.position, y: this.position.y + 1 };
        break;
      case "east":
        this.position = { ...this.position, x: this.position.x - 1 };
        break;
      case "south":
        this.position = { ...this.position, y: this.position.y - 1 };
        break;
      case "west":
        this.position = { ...this.position, x: this.position.x + 1 };
        break;
    }
    return this.onMove(this.position);
  }

  /**
   * To keep the main program in index.js
   * as clean as possible, I moved the logic
   * here and just call this method there.
   */

  handleInstructions(instructions) {
    instructions.forEach(instruction => {
      this.handleInstruction(instruction);
    })
  }

  /**
   * Perhaps over-engineered or could be
   * written in a tidier manner,
   * but at least it's very clear what's
   * going on. 
   */
  handleInstruction(number) {
    switch (number) {
      case 0:
        console.log([this.position.x, this.position.y]);
        process.exit();
        break;
      case 1:
        this.moveForward();
        break;
      case 2:
        this.moveBackward();
        break;
      case 3:
        this.rotateClockwise();
        break;
      case 4:
        this.rotateCounterClockwise();
        break;
    }
  }
}

module.exports = Object;
