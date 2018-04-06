const readline = require("readline");
const notes = require("./notes.js")
var userInput;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "note>> "
});

function stringComp(astring) {
  var dividers = [];
  var output =[];
  for (index=0;index<astring.length;index++) {
    if (astring[index] ==':') {
      dividers.push(index);
    }
  }
  output.push(astring.slice(0,dividers[0]));
  for (index=0;index<dividers.length;index++) {
    output.push(astring.slice(dividers[index]+1,dividers[index+1]));
  }
  return output;
}


rl.prompt();
rl.on("line", (line) => {
  userInput = line.trim();
  var commands = stringComp(userInput);

  switch(commands[0]) {

    case "add":
    console.log(0);
    notes.createNote(commands[1],commands[2]);
    break;

    case "delete":
    console.log(1);
    notes.deleteNote(commands[1]);
    break;

    case "update":
    console.log(2);
    notes.updateNote(commands[1],commands[2]);
    break;

    case "read":
    console.log(3);
    notes.readNote(commands[1]);
    break;

    case "list":
    console.log(4);
    notes.listNotes();
    break;

    }
    rl.prompt();
  }).on("close", () => {
  console.log("exiting...");
  process.exit(0);
});
