'use strict';

const formHeaderTextarea = document.querySelector('#form-header-textarea');
const formMainTextarea = document.querySelector('#form-text-textarea');
const symbolsCountSpan = document.querySelector('#form-symbols-count-span');

[formHeaderTextarea, formMainTextarea].forEach( textarea => textarea.addEventListener('keyup', () => {
  symbolsCountSpan.innerHTML = calculateSymbolsCount();
}))