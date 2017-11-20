
let playNote = function playNote(note) {
  // get the <audio> id by concatenating the note (a, b, c, etc) and 'Audio')
  // i.e. #cAudio, #dAudio, #eAudio
  let noteID = note + 'Audio';
  // play the sound file that
  // matches the created ID
  let audio = document.getElementById(noteID);
  audio.play();
}

$(document).ready(function() {
  // ???
  // instrument is class of div holding btns
  // click is action
  // button is target
  $('.instrument').on('click', 'button', function(event) {
    // playNote creates the noteID
    // using the 'note' passed in
    // (passed in when clicked)
    // and plays matching note
    playNote($(this).html());
    // empty .html() *returns* content
  });

  $('body').keydown(function(event) {
    let note = event.key;
    playNote(note);
  });
});

// lecture example
//  $('body').keydown(function(event){
//   if (event.key === 'a') {
//     alert("hey you got an a!");
//   }
// });
