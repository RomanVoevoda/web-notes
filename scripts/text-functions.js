'use strict';

function trimText(textParagraph, symbolsCount) {
  if(textParagraph.innerText.length > symbolsCount) {
    textParagraph.innerHTML = textParagraph.innerText.slice(0, symbolsCount) + '...';
  } 
}

function trimNotesText() {
  const notesHeaders = document.querySelectorAll('.note-header');
  const notesBodies = document.querySelectorAll('.note-text');

  [].forEach.call(notesHeaders, header => trimText(header, 12));
  [].forEach.call(notesBodies, textBody => trimText(textBody, 40));
}