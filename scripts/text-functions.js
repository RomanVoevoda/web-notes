'use strict';

function trimText(textParagraph, symbolsCount) {
  if(textParagraph.innerText.length > symbolsCount) {
    textParagraph.innerHTML = textParagraph.innerText.slice(0, symbolsCount) + '...';
  } 
}

function trimNotesText(headerParagraphs, bodyPargraphs) {
  [].forEach.call(headerParagraphs, header => trimText(header, 12));
  [].forEach.call(bodyPargraphs, textBody => trimText(textBody, 40));
}