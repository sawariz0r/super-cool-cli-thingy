class Table {
  constructor({ height, width }) {
    this.width = width;
    this.height = height;
    this.grid = this.grid(height, width);
  }

  grid(height, width) {
    return Array.from(new Array(height), (_, x) =>
      Array.from(new Array(width), (_, y) => {
        return [y, x]
      })
    );
  }

  checkMove({ x, y }) {
    return !!this.grid[y][x]
  }

  fellOutside() {
    console.log([-1, -1]);
    process.exit();
  }
}

module.exports = Table;
