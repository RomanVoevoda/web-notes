'use strict';

let notesFromStorage = localStorage.getItem('notesFromStorage');
let deletedNotesFromStorage = localStorage.getItem('deletedNotesFromStorage');

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

  if( !(deletedNotesFromStorage == null || deletedNotesFromStorage.length < 3) ) {
    dumpsterArray = JSON.parse(deletedNotesFromStorage);

    dumpsterArray.forEach(note => {
      Object.setPrototypeOf(note, DeletedNote.prototype);
    });

    openDumpsterButton.classList.remove('display-none');
  }
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('notesFromStorage', JSON.stringify(notesArray) );
  localStorage.setItem('deletedNotesFromStorage', JSON.stringify(dumpsterArray) );
});