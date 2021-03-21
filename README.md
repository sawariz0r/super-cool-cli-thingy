# Move an object in a grid/table

This is a cli program that takes instructions in a string like ```4, 5, 3, 3, 1, 1, 1,```
The first two are the dimensions of the grid and the rest is instructions on how to navigate the grid.

```
0 exits the simulation
1 takes a step forward
2 takes a step backwards
3 rotates clockwise
4 rotates counter clockwise
```

## Architecture/structure

As for using a well known architecture, I have almost only been working
with Frontend(React, vanilla html/css/js) and Node(express, etc) projects.
So I'm usually just subjected to the "default" structures of these frameworks (routes, components, tests, etc).

Which most likely falls under the functional programming architecture.


## Installation

You need to have Node.js installed on your system.
I initialized a package.json at first, but decided not to use external libraries/modules

## Usage

navigate to the project folder using command line.
example:
```javascript
node index.js 4, 5, 3, 3, 1, 1, 1, 1
```

## Contributing
Well.. If you really, really, really want you're welcome to open a pull request.

## License
None