const notesArray = [];
let currentCreationDate;

class Note {
  _header = '';
  _mainText = '';
  _creationDate = '';
  _body = '';
  
  constructor(headerText, mainText, creationDate) {
    this._header = `<p class="note-header">${headerText}</p>`;
    this._mainText = `<p class="note-text">${mainText}</p>`;
    this._creationDate = creationDate;
    this._body = `<article class="small-note"> ${this.header} ${this.mainText} ${this.creationDate} </article>`
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
    return `<p class="note-date">${setCreationDate( new Date(this._creationDate) )}</p>`;
  }

  get body() {
    return this._body;
  }

  [Symbol.toStringTag] = 'Note';
}