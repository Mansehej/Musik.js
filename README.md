# Musik.js
A library to make complex music pieces easily in JavaScript

## In progress - To be released! 
### (Check current progress sections for available features)

## Goals
- A developer with little/no music knowledge can easily create music programmatically. (ex. Simply copy-pasting song notes from the internet works)
- Multiple music pieces that are played parallelly can be easily added to a part. (ex. Right hand and left hand parts of the piano)
- It is  trivial to control the tempo as well as instrument of any piece.
- Chords, arpeggios, percussions, etc. can be auto generated.
- And more TBA

## Current Progress

### makeMidi(notes, octave, outputFileName)

Converts simple sound notes and exports them as a MIDI file

Takes a string with notes seperated by an empty space as input.
Can also take an array of notes as an input.

Each note that is of an octave that is not the octave specified in the second argument, must have an octave number with it. (Example: C#5)

Optional inputs are octave (default = 4) and filename (default = musik.mid)

**Example:**

``` JavaScript
makeMidi(['F#', 'F#', 'F#', 'A#', 'D#5', 'D#5', 'D#5', 'C#5', 'A#', 'A#', 'A#', 'A#', 'F', 'F', 'F', 'D#'], 4)
```
Or

``` JavaScript
makeMidi("F# F# F# A# D#5 D#5 D#5 C#5 A# A# A# A# F F F D#", 4)
```
Or

``` JavaScript
makeMidi("Gb Gb Gb Bb Eb5 Eb5 Eb5 Db5 Bb Bb Bb Bb F F F Eb", 4)
```

All of these automatically create a MIDI file (musik.mid) that plays _Faded (by Alan Walker)_'s intro on the 4th octave. Both sharp and flat notes are supported as demonstrated in the example above.

Use an underscore ( _ ) to denote a note break.

Capitalization does not matter.

**Example:**

``` JavaScript
makeMidi('c c g g a a g _ f f e e d d c', 5, 'twinkle')
```
This automatically creates a MIDI file (twinkle.mid) that plays the first line of the rhyme _Twinkle twinke little stars_ on the 4th octave.

Notice the note break after the first _star_.
