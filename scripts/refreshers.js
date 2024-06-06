'use strict';

const notesColumns = document.querySelectorAll('.notes-column');
const dumpsterColumns = document.querySelectorAll('.dumpster-column');

function refreshMainSection() {
  setNotesInColumns(notesColumns, notesArray);

  const notesHeaders = document.querySelectorAll('.small-note .note-header');
  const notesBodies = document.querySelectorAll('.small-note .note-text');

  addEventListenersForNotes();
  trimNotesText(notesHeaders, notesBodies);
}

function setNotesInColumns(columns, arrayOfNotes) {
  let firstColumn = [];
  let secondColumn = [];

  for(let i = 1; i - 1 < arrayOfNotes.length; i += 2) {
    if(arrayOfNotes[i - 1] != undefined) firstColumn.push(arrayOfNotes[i - 1].body);
    if(arrayOfNotes[i] != undefined) secondColumn.push(arrayOfNotes[i].body);
  }

  columns[0].innerHTML = (firstColumn.length > 0) ? firstColumn.reduce((column, note) => column + note, '') : '';
  columns[1].innerHTML = (secondColumn.length > 0) ? secondColumn.reduce((column, note) => column + note, '') : '';
}

function addEventListenersForNotes() {
  const notes = getArrayWithRenderedNotes(notesColumns, '.small-note');

  for(let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', () => {
      notesArray[i].changeNote(noteCreationForm);
      changingNoteIndex = i;
    });

    notes[i].addEventListener('dragstart', (event) => {
      event.dataTransfer.effectAllowed = "move";
      draggingNoteIndex = i;

      if( !trashCanContainer.classList.contains('trashcan-ondragstart') ) {
        trashCanContainer.classList.add('trashcan-ondragstart');
      }

      notes[i].classList.add('dragging');
    });

    notes[i].addEventListener('dragend', () => {
      notes[i].classList.remove('dragging');

      if( trashCanContainer.classList.contains('trashcan-ondragstart') ) {
        trashCanContainer.classList.remove('trashcan-ondragstart');
      }

      if( trashCanContainer.classList.contains('trashcan-under-drop') ) {
        trashCanContainer.classList.remove('trashcan-under-drop');
      }
    });
  }
}

function getArrayWithRenderedNotes(columns, notesClass) {
  let firstColumnNotes = columns[0].querySelectorAll(notesClass);
  let secondColumnNotes = columns[1].querySelectorAll(notesClass);

  const notes = [];

  for(let i = 0; i < firstColumnNotes.length || i < secondColumnNotes.length; i++) {
    if(firstColumnNotes[i] != undefined) notes.push(firstColumnNotes[i]);
    if(secondColumnNotes[i] != undefined) notes.push(secondColumnNotes[i]);
  }

  return notes;
}

function refreshDumpster() {
  setNotesInColumns(dumpsterColumns, dumpsterArray);

  const deletedNotesHeaders = document.querySelectorAll('.deleted-note .note-header');
  const deletedNotesBodies = document.querySelectorAll('.deleted-note .note-text');

  sortDumpsterArray();
  addEventListenersForDeletedNotes();
  trimNotesText(deletedNotesHeaders, deletedNotesBodies);
}

function addEventListenersForDeletedNotes() {
  const notes = getArrayWithRenderedNotes(dumpsterColumns, '.deleted-note');

  for(let i = 0; i < notes.length; i++) {
    notes[i].addEventListener('dragstart', (event) => {
      event.dataTransfer.effectAllowed = "move";
      draggingNoteIndex = i;

      if( !(recoveryContentContainer.classList.contains('recovery-container-ondragstart')) ) {
        recoveryContentContainer.classList.add('recovery-container-ondragstart');
      }

      notes[i].classList.add('dragging');
    });

    notes[i].addEventListener('dragend', () => {
      notes[i].classList.remove('dragging');

      if( recoveryContentContainer.classList.contains('recovery-container-ondragstart') ) {
        recoveryContentContainer.classList.remove('recovery-container-ondragstart');
      }

      if( recoveryContentContainer.classList.contains('recovery-container-under-drop') ) {
        recoveryContentContainer.classList.remove('recovery-container-under-drop');
      }
    });
  }
}