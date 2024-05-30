'use strict';

let draggingNoteIndex = 0;

const trashCanContainer = document.querySelector('#trash-can-content-container');

trashCanContainer.addEventListener('dragover', event => event.preventDefault() );

trashCanContainer.addEventListener('drop', event => {
  event.preventDefault();

  if( trashCanContainer.classList.contains('trashcan-under-drop') ) {
    trashCanContainer.classList.remove('trashcan-under-drop');
  }

  if( openDumpsterButton.classList.contains('display-none') ) {
    openDumpsterButton.classList.remove('display-none');
  }

  let removedNote = notesArray.splice(draggingNoteIndex, 1);
  dumpsterArray.push( new DeletedNote(removedNote[0].header, removedNote[0].mainText, new Date(removedNote[0].dateTimestamp), new Date()) );

  refreshMainSection();
});

const recoveryContentContainer = document.querySelector('#recovery-content-container');

recoveryContentContainer.addEventListener('dragover', event => event.preventDefault() );

recoveryContentContainer.addEventListener('drop', event => {
  event.preventDefault();

  if( recoveryContentContainer.classList.contains('recovery-container-under-drop') ) {
    recoveryContentContainer.classList.remove('recovery-container-under-drop');
  }

  let removedNote = dumpsterArray.splice(draggingNoteIndex, 1);
  notesArray.push( new Note(removedNote[0].header, removedNote[0].mainText, new Date(removedNote[0].dateTimestamp)) );

  refreshDumpster();
  sortNotesArray();
  refreshMainSection();
});