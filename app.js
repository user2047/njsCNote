const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">> "
});

console.log("Enter command:");

rl.prompt();

rl.question(">> ", (answer) => {
  console.log(`User input received: ${answer}`);
  rl.close();
})
