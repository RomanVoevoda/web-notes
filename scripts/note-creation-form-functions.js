'use strict';

let changingNoteIndex = 0;

function openNoteCreationForm(date, header = '', mainText = '') {
  const noteCreationDate = document.querySelector('#form-date-span');

  noteCreationForm.classList.remove('display-none');
  notesSection.classList.add('stop-scrolling');

  noteCreationDate.innerHTML = setCreationDate(date);
  formHeaderTextarea.value = header;
  formMainTextarea.value = mainText;
  symbolsCountSpan.innerHTML = calculateSymbolsCount();
}

function calculateSymbolsCount() {
  return formHeaderTextarea.value.length + formMainTextarea.value.length;
}

function setCreationDate(value) {
  let noteCreationDate = value;
  currentCreationDate = value;
  let months = ['Толшор', 'Кион', 'Куака', 'Ош', 'Куар', 'Инвожо', 'Кос', 'Гудыри', 'Сйзъыл', 'Пукро', 'Пошур', 'Толсур'];

  return ( noteCreationDate.getDate() + ' ' + months[noteCreationDate.getMonth()].slice(0, 3) + ' ' 
  + fixTimeDisplay( noteCreationDate.getHours() ) + ':' + fixTimeDisplay( noteCreationDate.getMinutes() ) );
}

function fixTimeDisplay(date) {
  return (String(date).length === 1) ? '0' + date : date;
}

function clearForm(header, symbolsCount, mainText) {
  header.value = '';
  symbolsCount.innerHTML = 0;
  mainText.value = '';
}

function closeNoteCreationForm() {
  noteCreationForm.classList.add('display-none');
  notesSection.classList.remove('stop-scrolling');
  confirmNoteCreationButton.classList.add('display-none');

  if( noteCreationForm.classList.contains('note-changing') ) {
    noteCreationForm.classList.remove('note-changing');
  }

  clearForm(formHeaderTextarea, symbolsCountSpan, formMainTextarea);
}

function createNewNote(header, body, date) {
  if( noteCreationForm.classList.contains('note-changing') ) {
    noteCreationForm.classList.remove('note-changing');

    notesArray.splice(changingNoteIndex, 1);
  }

  notesArray.push(new Note(header, body, date));

  sortNotesArray();
  refreshMainSection();
  closeNoteCreationForm();
}