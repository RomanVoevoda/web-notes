'use strict'

const formHeaderTextarea = document.querySelector('#form-header-textarea');
const formMainTextarea = document.querySelector('#form-text-textarea');
const symbolsCountSpan = document.querySelector('#form-symbols-count-span');
const confirmNoteCreationButton = document.querySelector('.fa-check');

[formHeaderTextarea, formMainTextarea].forEach( item => item.addEventListener('keyup', () => {
  symbolsCountSpan.innerHTML = calculateSymbolsCount();
  if(confirmNoteCreationButton.classList.contains('display-none')) confirmNoteCreationButton.classList.remove('display-none');
}))