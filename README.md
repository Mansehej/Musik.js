# Musik.js
A library to make complex music pieces easily in JavaScript

## Goals
- A developer with little/no music knowledge can easily create music programmatically. (ex. Simply copy-pasting song notes from the internet works)
- Multiple music pieces that are played parallelly can be easily added to a part. (ex. Right hand and left hand parts of the piano)
- It is  trivial to control the tempo as well as instrument of any piece.
- Chords, arpeggios, percussions, etc. can be auto generated.
- And more TBA

## Current Progress
Simple sound notes are automatically converted and exported as a MIDI file.

Example: 

``` JavaScript
makeMidi("F# F# F# A# D#5 D#5 D#5 C#5 A# A# A# A# F F F D#", 4)
```

Automatically creates a MIDI file that plays Faded (by Alan Walker)'s intro on the 4th octave.
