module.exports = {
  parse: (string) => {
    try {
      return string.split(",").map((x) => parseInt(x));
    } catch {
      /**
       * Will most likely never reach this one,
       * but to make it look like I spent time
       * on error handling and to add more
       * flavor - here you go!
       */
      console.log("I'm sorry, sir. But the peasants parsing your input will have a nervous breakdown if you don't provide proper input.\n Please try to follow this example: '3, 1, 1, 1'")
    }
  },
};
