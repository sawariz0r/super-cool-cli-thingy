const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * This class is obsolete, as I was thinking
 * that the user might want to use the cli
 * more like a game, where you ask and wait
 * for an answer. 
 * So I was thinking a polite butler-persona
 * who asked questions and replied. Then I 
 * read the instructions again and moved on
 * from this. I'll just leave it here :)
 */

class Console {
  async error(msg) {
    return msg;
  }  

  async awaitInput(msg) {
    let response;

    rl.setPrompt(msg);
    rl.prompt();

    return new Promise((resolve, reject) => {
      rl.on("line", input => {
        response = input;
        rl.close();
      })

      rl.on("close", () => {
        resolve(response);
      })
    })
  }

  async ask() {
    const input = await this.awaitInput("What's your orders, sir?\n");
    console.log(input);
  }

  tell(msg) {
    process.stdout.write(msg + "\n")
    rl.close()
  }
}

module.exports = Console;