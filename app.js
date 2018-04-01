const readline = require("readline");
const notes = require("./notes.js")
var userInput;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "note>> "
});

rl.prompt();


rl.on("line", (line) => {
  userInput = line.trim();
  switch(userInput) {

    case "add":
    console.log(0);
    break;

    case "delete":
    console.log(1);
    break;

    case "update":
    console.log(2);
    break;

    case "read":
    console.log(3);
    break;

    case "list":
    console.log(4);
    break;

    case "exit":
    console.log(5);
    break;

    default:
    console.log(6);
    console.log(userInput)
    }
    rl.prompt();
  }).on("close", () => {
  console.log("exiting...");
  process.exit(0);
});
