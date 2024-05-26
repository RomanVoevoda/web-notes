'use strict';

let notesArray = [];
let currentCreationDate;

class Note {
  _header = '';
  _mainText = '';
  _creationDate = '';
  _body = '';
  
  constructor(headerText, mainText, creationDate) {
    this._header = headerText;
    this._mainText = mainText;
    this._creationDate = creationDate;
    this._body = `
      <article class="small-note"> 
        <p class="note-header">${this.header}</p>
        <p class="note-text">${this.mainText}</p> 
        <p class="note-date">${this.creationDate}</p>
      </article>`;
  }

  static compareNotes(firstNote, secondNote) {
    return secondNote.dateTimestamp - firstNote.dateTimestamp;
  }

  static reverseCompareNotes(firstNote, secondNote) {
    return firstNote.dateTimestamp - secondNote.dateTimestamp;
  }

  changeNote(form) {
    openNoteCreationForm( new Date(), this.header, this.mainText );
    form.classList.add('note-changing');
  }

  set header(headerText) {
    (headerText.length > 0) ? this._header = headerText : this._header = 'Заголовок';
  }

  get header() {
    return this._header;
  }

  set mainText(mainText) {
    (mainText.length > 0) ? this._mainText = mainText : this._mainText = 'Нет текста';
  }

  get mainText() {
    return this._mainText;
  }

  set creationDate(value) {
    this._creationDate = value;
  }

  get creationDate() {
    return setCreationDate( new Date(this._creationDate) );
  }

  get dateTimestamp() {
    return (this._creationDate instanceof Date) ? Number(this._creationDate) : Number( new Date(this._creationDate) );
  }

  get body() {
    return this._body;
  }

  [Symbol.toStringTag] = 'Note';
}