'use strict';

let draggingNoteIndex = 0;

const trashCanContainer = document.querySelector('#trash-can-container');

trashCanContainer.addEventListener('dragover', event => event.preventDefault() );

trashCanContainer.addEventListener('dragenter', () => {
  trashCanContainer.classList.add('trashcan-under-drop');
});

trashCanContainer.addEventListener('dragleave', () => {
  if( trashCanContainer.classList.contains('trashcan-under-drop') ) {
    trashCanContainer.classList.remove('trashcan-under-drop');
  }
});

trashCanContainer.addEventListener('drop', event => {
  event.preventDefault();

  if( trashCanContainer.classList.contains('trashcan-ondragstart') ) {
    trashCanContainer.classList.remove('trashcan-ondragstart');
  }

  if( openDumpsterButton.classList.contains('display-none') ) {
    openDumpsterButton.classList.remove('display-none');
  }

  let removedNote = notesArray.splice(draggingNoteIndex, 1);
  dumpsterArray.push( new DeletedNote(removedNote[0].header, removedNote[0].mainText, new Date(removedNote[0].dateTimestamp), new Date()) );

  refreshMainSection();
});

const recoveryContentContainer = document.querySelector('#recovery-container');

recoveryContentContainer.addEventListener('dragover', event => event.preventDefault() );

recoveryContentContainer.addEventListener('dragenter', () => {
  recoveryContentContainer.classList.add('recovery-container-under-drop');
});

recoveryContentContainer.addEventListener('dragleave', () => {
  if( recoveryContentContainer.classList.contains('recovery-container-under-drop') ) {
    recoveryContentContainer.classList.remove('recovery-container-under-drop');
  }
});

recoveryContentContainer.addEventListener('drop', event => {
  event.preventDefault();

  if( recoveryContentContainer.classList.contains('recovery-container-ondragstart') ) {
    recoveryContentContainer.classList.remove('recovery-container-ondragstart');
  }

  if( recoveryContentContainer.classList.contains('recovery-container-under-drop') ) {
    recoveryContentContainer.classList.remove('recovery-container-under-drop');
  }

  let removedNote = dumpsterArray.splice(draggingNoteIndex, 1);
  notesArray.push( new Note(removedNote[0].header, removedNote[0].mainText, new Date(removedNote[0].dateTimestamp)) );

  refreshDumpster();
  sortNotesArray();
  refreshMainSection();
});