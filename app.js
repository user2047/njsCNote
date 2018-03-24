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


constant fs = require("fs");

function readNotes() {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  }
  catch (error) {
    console.log(error);
    return [];
  };
}

function writeNotes(notes) {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

function logNotes(note) {
  console.log("--");
  console.log(note.title);
  console.log(note.body);
};




function createNote(title,body) {
  var note = {
    title,
    body
  };
  var notes = readNotes();
  var duplicateNotes = notes.filter((note) => {
    return notes.title == title;
  })
  if (duplicateNotes.length === 0) {
    notes.push(note);
    writeNotes(notes);
    return note;
  }
}

function readNote(title) {
  var notes = readNotes();
  var filteredNotes = notes.filter((note) => {
    note.title == title;
  })
  return filteredNotes[0];
}

function updateNote(title, newTitle, newBody) {
  var notes = readNotes();
  var filteredNotes = notes.filter((note) => {
    note.title !== title;
  })

}

function deleteNote(title) {
  var notes = readNotes();

}
