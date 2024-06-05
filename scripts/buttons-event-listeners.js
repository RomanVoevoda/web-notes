'use strict';

const hideControlPanelButton = document.querySelector('#hide-control-panel-button');
const openControlPanelButton = document.querySelector('#open-control-panel-button');

hideControlPanelButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('#main-control-buttons-container');
  const notesColumnsContainer = document.querySelector('#notes-column-container');

  controlIconsContainer.classList.add('hide');
  notesColumnsContainer.classList.add('hide');
  notesColumnsContainer.style.minHeight = 'calc(100% - 5rem)';
  setTimeout( () => openControlPanelButton.classList.remove('display-none'), 300);
})

openControlPanelButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('#main-control-buttons-container');
  const notesColumnsContainer = document.querySelector('#notes-column-container');

  controlIconsContainer.classList.remove('hide');
  notesColumnsContainer.classList.remove('hide');
  setTimeout(() => notesColumnsContainer.style.minHeight = 'calc(100% - 11rem)', 300);
  openControlPanelButton.classList.add('display-none');
})

const openFormButton = document.querySelector('#open-note-creation-form-button');
const openFormMobileButton = document.querySelector('#open-note-creation-form-mobile-button');

[openFormButton, openFormMobileButton].forEach( button => button.addEventListener('click', () => {
  openNoteCreationForm( new Date() );

  [formHeaderTextarea, formMainTextarea].forEach( textarea => textarea.addEventListener('keyup', () => {
    if(createNoteButton.classList.contains('display-none')) createNoteButton.classList.remove('display-none');
  },
  {once: true}));
}))

const closeFormButton = document.querySelector('#close-note-creation-form-button');
const noteCreationForm = document.querySelector('#note-creation-form');
const notesSection = document.querySelector('#main-notes-section');

closeFormButton.addEventListener('click', () => closeNoteCreationForm());

const createNoteButton = document.querySelector('#create-note-button');
const noteCreationDate = document.querySelector('#form-date-span');

createNoteButton.addEventListener('click', () => createNewNote(formHeaderTextarea.value, formMainTextarea.value, currentCreationDate));



const sortButton = document.querySelector('#sort-notes-section-button');

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

const cancelActionButton = document.querySelector('#cancel-action-button');
const backCancelledActionButton = document.querySelector('#back-cancelled-action-button');

cancelActionButton.addEventListener('click', () => {
  document.execCommand('undo');
});

backCancelledActionButton.addEventListener('click', () => {
  document.execCommand('redo');
});

const dumpsterContainer = document.querySelector('#dumpster-container');
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