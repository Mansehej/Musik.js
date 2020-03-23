const scribble = require("scribbletune");

async function makeMidi(notes, normalScale = 4, outputName = "musik") {
  try {
    await scribble.midi(
      scribble.clip(makeClip(notes, normalScale)),
      outputName
    );
  } catch (e) {
    console.error(e);
  }
}

function notesArrayFromString(notes) {
  return notes.split(" ");
}

function makeClip(notes, normalScale) {
  let notesArray;

  // Check if input type is valid
  if (typeof notes == "string") {

    // Convert string of notes into array
    notesArray = notesArrayFromString(notes);
  } else if (Array.isArray(notes)) {
    notesArray = notes;
  } else {
    throw new TypeError("Notes can only be of type string or array.");
  }

  var pattern = "";
  for (var i = 0; i < notesArray.length; i++) {

    // Handle for empty note ( _ )
    if (notesArray[i] == "_") {
      pattern = pattern + "_";
      notesArray.splice(i, 1);
      i--;
    } else {
      pattern = pattern + "x";

      // Handle for when note does not have specified numerical octave
      if (!/\d$/.test(notesArray[i])) {
        
        // Increment octave of note on usage of +
        if (/\+$/.test(notesArray[i])) {
          let incrementedNote = notesArray[i].replace(/\+$/, "");
          notesArray[i] = incrementedNote + (normalScale + 1);
        } 
        
        // Deccrement octave of note on usage of -
        else if (/\-$/.test(notesArray[i])) {
          let decrementedNote = notesArray[i].replace(/\-$/, "");
          notesArray[i] = decrementedNote + (normalScale - 1);
        } 
        
        // Else apply default octave
        else {
          notesArray[i] = notesArray[i] + normalScale;
        }
      }
    }
  }

  // Object for scribble.clip
  var musicObj = {
    pattern: pattern,
    notes: notesArray
  };
  return musicObj;
}

module.exports = {
  makeMidi
};