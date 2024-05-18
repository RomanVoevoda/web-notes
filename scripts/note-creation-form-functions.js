function calculateSymbolsCount() {
  return formHeaderTextarea.value.length + formMainTextarea.value.length;
}

function setCreationDate(value) {
  let noteCreationDate = value;
  let months = ['Толшор', 'Кион', 'Куака', 'Ош', 'Куар', 'Инвожо', 'Кос', 'Гудыри', 'Сйзъыл', 'Пукро', 'Пошур', 'Толсур']

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