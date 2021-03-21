class Table {
  constructor({ height, width }) {
    this.width = width;
    this.height = height;
    this.grid = this.grid(height, width);
  }

  grid(height, width) {
    /**
     * Creating a two dimensional grid array,
     * however it's not neccesary to add the
     * coordinates to the objects. But the
     * method I went with to check if the
     * space exists in checkMove requires me
     * to have something in there.
     * Also could be useful if you decide to
     * add functionality to rotate the
     * table.
     */
    return Array.from(new Array(height), (_, x) =>
      Array.from(new Array(width), (_, y) => {
        return [y, x];
      })
    );
  }

  checkMove({ x, y }) {
    /**
     * Checks if the space exists,
     * and turns it into a boolean.
     * Returns if the move is valid
     * or not.
     */
    return !!this.grid[y][x];
  }

  fellOutside() {
    /**
     * It made sense to
     * put this here for now,
     * instead of using it in
     * multiple places where
     * the table was initialized
     */
    console.log([-1, -1]);
    process.exit();
  }
}

module.exports = Table;
