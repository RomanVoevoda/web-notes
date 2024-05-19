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
}