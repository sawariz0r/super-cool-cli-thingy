const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  async error(msg) {
    return msg;
  }

  async awaitInput(msg) {
    let response;

    rl.setPrompt(msg);
    rl.prompt();

    return new Promise((resolve, reject) => {
      rl.on("line", (input) => {
        response = input;
        rl.close();
      });

      rl.on("close", () => {
        resolve(response);
      });
    });
  }

  async ask(msg) {
    return await this.awaitInput(msg + "\n");
  }

  tell(msg) {
    process.stdout.write(msg + "\n");
    rl.close();
  }
}

module.exports = Console;
