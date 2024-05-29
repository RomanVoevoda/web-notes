'use strict';

let notesFromStorage = localStorage.getItem('notesFromStorage');

window.addEventListener('load', () => {
  if(notesFromStorage == null || notesFromStorage.length < 3) {
    createNewNote('Заголовок', 'Нет текста', new Date() );
  } else {
    notesArray = JSON.parse(notesFromStorage);

    notesArray.forEach(note => {
      Object.setPrototypeOf(note, Note.prototype);
    });

    sortNotesArray();
    refreshMainSection();
  }
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('notesFromStorage', JSON.stringify(notesArray) );
});