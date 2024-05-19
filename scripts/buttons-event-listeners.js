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
  const noteCreationForm = document.querySelector('.note-creation-form');
  const notesSection = document.querySelector('.notes-section');
  const noteCreationDate = document.querySelector('#form-date-span');

  noteCreationForm.classList.remove('display-none');
  notesSection.classList.add('stop-scrolling');
  noteCreationDate.innerHTML = setCreationDate(new Date());
}))

const closeFormButton = document.querySelector('.form-control-buttons .fa-arrow-left');
const noteCreationForm = document.querySelector('.note-creation-form');
const notesSection = document.querySelector('.notes-section');

closeFormButton.addEventListener('click', () => closeNoteCreationForm());

const createNoteButton = document.querySelector('.note-creation-form .change-flex-direction-span .fa-check');
const noteCreationDate = document.querySelector('#form-date-span');

createNoteButton.addEventListener('click', () => createNewNote(formHeaderTextarea.value, formMainTextarea.value, currentCreationDate));