const audio = ["media/c_note.mp3", "media/d_note.mp3", "media/e_note.mp3", "media/f_note.mp3", "media/g_note.mp3", "media/a_note.mp3", "media/b_note.mp3"];

$(document).ready(function() {
  $('button').click(function() {
      var i = $(this).attr('class').substring(5);
      new Audio(audio[i-1]).play();
  });
});
