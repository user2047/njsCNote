// const readline = require("readline");
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: ">> "
// });
//
// console.log("Enter command:");
//
// rl.prompt();
//
// rl.question(">> ", (answer) => {
//   console.log(`User input received: ${answer}`);
//   rl.close();
// })

const fs = require("fs");

function readNotes() {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  }
  catch (error) {
    console.log(error);
    return {};
  };
}

function writeNotes(notes) {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

// function logNotes(title) {
//   notes = readNotes();
//   console.log("--");
//   console.log(title);
//   console.log(notes[title]);
// };

function createNote(title,body) {
  var notes = readNotes();
  if (notes[title]) {
    console.log("note already exists");
  } else {
    notes[title] = body
    writeNotes(notes);
  }
}

function readNote(title) {
  var notes = readNotes();
  console.log(notes[title]);

}

function updateNote(title, body) {
  var notes = readNotes();
  if (notes[title]) {
    notes[title] = body;
    writeNotes(notes);
  } else {

    console.log("note does not exist");
  }
}

function deleteNote(title) {
  var notes = readNotes();
  if (notes[title]) {
    delete notes[title]
    writeNotes(notes)
  } else {
    console.log("note does not exist");
  }
}

function listNotes() {
  var notes = readNotes();
  // for (index = 0; index < Object.keys(notes).length; index++) {
  //   logNotes(index);
  console.log(notes);
}

function wipeNotes() {
  var notes = {}
  writeNotes(notes)
}




// wipeNotes();
//
// console.log("creating Notes...");
// createNote("head1", "body");
// createNote("head2", "body");
// createNote("head3", "body");
//
//
//
// listNotes();
//
//
// console.log("updating notes...");
//
// updateNote("head2", "newBody");
//
// readNote("head2");
//
//
// console.log("deleting notes...");
// deleteNote("head3");
//
// listNotes();


module.exports = {
  createNote,
  readNote,
  updateNote,
  deleteNote,
  listNotes,
  wipeNotes
};
