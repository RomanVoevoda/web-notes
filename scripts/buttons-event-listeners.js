'use strict';

const hideControlPanelButton = document.querySelector('.control-icons-container .fa-caret-up');
const openControlPanelButton = document.querySelector('.control-icons-container .fa-caret-down');

hideControlPanelButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('.control-icons-container');
  const notesColumnsContainer = document.querySelector('.notes-column-container');

  controlIconsContainer.classList.add('hide');
  notesColumnsContainer.classList.add('hide');
  setTimeout( () => openControlPanelButton.classList.remove('display-none'), 300);
})

openControlPanelButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('.control-icons-container');
  const notesColumnsContainer = document.querySelector('.notes-column-container');

  controlIconsContainer.classList.remove('hide');
  notesColumnsContainer.classList.remove('hide');
  openControlPanelButton.classList.add('display-none');
})

const openFormButton = document.querySelector('.control-icons-container .fa-plus');
const openFormMobileButton = document.querySelector('.mobile-create-note-button');

[openFormButton, openFormMobileButton].forEach( item => item.addEventListener('click', () => {
  openNoteCreationForm( new Date() );
}))

const closeFormButton = document.querySelector('.form-control-buttons .fa-arrow-left');
const noteCreationForm = document.querySelector('.note-creation-form');
const notesSection = document.querySelector('.notes-section');

closeFormButton.addEventListener('click', () => closeNoteCreationForm());

const createNoteButton = document.querySelector('.note-creation-form .change-flex-direction-span .fa-check');
const noteCreationDate = document.querySelector('#form-date-span');

createNoteButton.addEventListener('click', () => createNewNote(formHeaderTextarea.value, formMainTextarea.value, currentCreationDate));



const sortButton = document.querySelector('.control-icons-container i:first-child')

sortButton.addEventListener('click', () => {
  if( sortButton.classList.contains('fa-arrow-down-wide-short') ) {
    sortButton.classList.remove('fa-arrow-down-wide-short');
    sortButton.classList.add('fa-arrow-up-short-wide');
  } else {
    sortButton.classList.add('fa-arrow-down-wide-short');
    sortButton.classList.remove('fa-arrow-up-short-wide');
  }

  sortNotesArray();
  refreshMainSection();
});

const cancelActionButton = document.querySelector('.note-creation-form .fa-arrow-turn-up');
const backCancelledActionButton = document.querySelector('.note-creation-form .fa-arrow-turn-down');

cancelActionButton.addEventListener('click', () => {
  document.execCommand('undo');
});

backCancelledActionButton.addEventListener('click', () => {
  document.execCommand('redo');
});

const dumpsterContainer = document.querySelector('.dumpster-container');
const openDumpsterButton = document.querySelector('#open-dumpster-button');
const closeDumpsterButton = document.querySelector('#close-dumpster-button');

openDumpsterButton.addEventListener('click', () => {
  refreshDumpster();
  dumpsterContainer.classList.add('open-dumpster');
});

closeDumpsterButton.addEventListener('click', () => {
  dumpsterContainer.classList.remove('open-dumpster');
});

const clearDumpsterButton = document.querySelector('#clear-dumpster-button');

clearDumpsterButton.addEventListener('click', () => {
  dumpsterArray.length = 0;
  localStorage.setItem('deletedNotesFromStorage', null );
  refreshDumpster();
});

const recoveringNotesButton = document.querySelector('#recovering-notes-button');

recoveringNotesButton.addEventListener('click', () => {
  dumpsterArray.forEach(note => notesArray.push( new Note(note.header, note.mainText, new Date(note.dateTimestamp) ) ));

  dumpsterArray.length = 0;

  refreshDumpster();
  sortNotesArray();
  refreshMainSection();
});