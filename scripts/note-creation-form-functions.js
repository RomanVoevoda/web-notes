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

  clearForm(formHeaderTextarea, symbolsCountSpan, formMainTextarea);
}

function createNewNote(header, body, date) {
  notesArray.push(new Note(header, body, date));

  closeNoteCreationForm();
}