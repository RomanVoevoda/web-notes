const controlIconsHideButton = document.querySelector('.control-icons-container .fa-caret-up');
const controlIconsOpenButton = document.querySelector('.control-icons-container .fa-caret-down');

controlIconsHideButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('.control-icons-container');
  const notesColumnsContainer = document.querySelector('.notes-column-container');

  controlIconsContainer.classList.add('hide');
  notesColumnsContainer.classList.add('hide');
  setTimeout( () => controlIconsOpenButton.classList.remove('display-none'), 300);
})

controlIconsOpenButton.addEventListener('click', () => {
  const controlIconsContainer = document.querySelector('.control-icons-container');
  const notesColumnsContainer = document.querySelector('.notes-column-container');

  controlIconsContainer.classList.remove('hide');
  notesColumnsContainer.classList.remove('hide');
  controlIconsOpenButton.classList.add('display-none');
})