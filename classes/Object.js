class Object {
  constructor({
    position = { x: 0, y: 0 },
    direction = 0,
    directions = ["north", "east", "south", "west"],
  }) {
    this.position = position;
    this.direction = direction;
    this.directions = directions;
    this.onMove = (move) => move; // do nothing with the move
  }

  getDirection() {
    const { direction, directions } = this;
    return directions[direction];
  }

  getPosition() {
    return [this.position.x, this.position.y];
  }

  rotateClockwise() {
    const { direction, directions } = this;
    const endOfDirections = directions.length - 1;

    if (direction === endOfDirections) {
      this.direction = 0;
      return;
    }
    this.direction = direction + 1;
  }

  rotateCounterClockwise() {
    const { direction, directions } = this;
    const endOfDirections = directions.length - 1;

    if (direction === 0) {
      this.direction = endOfDirections;
      return;
    }
    this.direction = direction - 1;
  }

  moveForward() {
    // figure out the direction
    const dir = this.directions[this.direction];
    // north: -y, east: +x, south: +y, west: -x
    // return next move
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
