'use strict';

function trimText(textParagraph, symbolsCount) {
  if(textParagraph.innerText.length > symbolsCount) {
    textParagraph.innerHTML = textParagraph.innerText.slice(0, symbolsCount) + '...';
  } 
}

function trimNotesText(headerParagraphs, bodyPargraphs) {
  if(window.innerWidth < 600) {
    [].forEach.call(headerParagraphs, header => trimText(header, 9));
    [].forEach.call(bodyPargraphs, textBody => trimText(textBody, 40));
  } else if((window.innerWidth < 1200)) {
    [].forEach.call(headerParagraphs, header => trimText(header, 15));
    [].forEach.call(bodyPargraphs, textBody => trimText(textBody, 40));
  } else {
    [].forEach.call(headerParagraphs, header => trimText(header, 24));
    [].forEach.call(bodyPargraphs, textBody => trimText(textBody, 40));
  }
}