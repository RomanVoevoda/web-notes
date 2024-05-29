'use strict';

let draggingNoteIndex = 0;

const trashCanContainer = document.querySelector('#trash-can-content-container');

trashCanContainer.addEventListener('dragover', (event) => event.preventDefault() );

trashCanContainer.addEventListener('drop', (event) => {
  event.preventDefault();

  if( trashCanContainer.classList.contains('trashcan-under-drop') ) {
    trashCanContainer.classList.remove('trashcan-under-drop');
  }

  notesArray.splice(draggingNoteIndex, 1);

  refreshMainSection();
});