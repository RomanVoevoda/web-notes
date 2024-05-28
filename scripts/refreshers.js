'use strict';

function refreshMainSection() {
  const notesColumns = document.querySelectorAll('.notes-column');
  let firstColumn = [];
  let secondColumn = [];

  for(let i = 1; i - 1 < notesArray.length; i += 2) {
    if(notesArray[i - 1] != undefined) firstColumn.push(notesArray[i - 1].body);
    if(notesArray[i] != undefined) secondColumn.push(notesArray[i].body);
  }

  notesColumns[0].innerHTML = (firstColumn.length > 0) ? firstColumn.reduce((column, note) => column + note, '') : '';
  notesColumns[1].innerHTML = (secondColumn.length > 0) ? secondColumn.reduce((column, note) => column + note, '') : '';

  trimNotesText();
}

function addEventListenersForNotes() {
  const notesColumns = document.querySelectorAll('.notes-column');
  let firstColumnNotes = notesColumns[0].querySelectorAll('.small-note');
  let secondColumnNotes = notesColumns[1].querySelectorAll('.small-note');

  const notes = [];

  for(let i = 0; i < firstColumnNotes.length || i < secondColumnNotes.length; i++) {
    if(firstColumnNotes[i] != undefined) notes.push(firstColumnNotes[i]);
    if(secondColumnNotes[i] != undefined) notes.push(secondColumnNotes[i]);
  }

  for(let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', () => {
      notesArray[i].changeNote(noteCreationForm);
      changingNoteIndex = i;
    });

    notes[i].addEventListener('dragstart', (event) => {
      event.dataTransfer.effectAllowed = "move";
      draggingNoteIndex = i;

      if( !trashCanContainer.classList.contains('trashcan-under-drop') ) {
        trashCanContainer.classList.add('trashcan-under-drop');
      }

      notes[i].classList.add('dragging');
    });

    notes[i].addEventListener('dragend', () => {
      notes[i].classList.remove('dragging');

      if( trashCanContainer.classList.contains('trashcan-under-drop') ) {
        trashCanContainer.classList.remove('trashcan-under-drop');
      }
    });
  }
}