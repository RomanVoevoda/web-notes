'use strict';

function sortNotesArray() {
  sortButton.classList.contains('fa-arrow-down-wide-short') ? notesArray.sort(Note.compareNotes) : notesArray.sort(Note.reverseCompareNotes);
}