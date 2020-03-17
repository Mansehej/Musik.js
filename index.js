const scribble = require('scribbletune');

async function makeMidi(notes, normalScale=4, outputName='musik') {
    await  scribble.midi(scribble.clip(makeClip(notes,normalScale)),outputName)
}

function makeClip(notes, normalScale) {
    var notesArray = notes.split(' ')
    var pattern = ''
    var spliceLocations = []
    for(var i = 0; i < notesArray.length; i++) {
        if(notesArray[i] == '_') {
            pattern = pattern + '_'
            spliceLocations.push[i]
            notesArray.splice(i,1)
            i--
        }
        else {
            pattern = pattern + 'x'
            if(!/\d/.test(notesArray[i])) {
                notesArray[i] = notesArray[i] + normalScale
            }
        }
    }
    var musicObj = {
        pattern: pattern,
        notes: notesArray
    }
    return musicObj
}

module.exports = {
    makeMidi
}