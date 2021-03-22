# Move an object in a grid/table

This is a cli program that takes instructions in a string like `4, 5, 3, 3, 1, 1, 1,`
The 2 first are the dimensions of the grid, 2 after that is starting position and (optional) the rest is instructions on how to navigate the grid. 

If you don't provide starting position, it defaults to 0, 0.
And if you don't provide instructions - the CLI will prompt you for these.

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
example with instructions provided:

```javascript
node index.js 4, 5, 1, 1, 3, 1, 3, 1
> [ 2, 2 ]
```

example with NO instructions provided:

```javascript
node index.js 4, 5, 1, 1
> "What's your instructions, sir?"
3, 1, 3, 1
> [ 2, 2 ]
```

## Contributing

Well.. If you really, really, really want you're welcome to open a pull request.

## License

None
