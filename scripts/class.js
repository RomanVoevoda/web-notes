'use strict';

let notesArray = [];
let dumpsterArray = [];
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
      <article class="small-note" draggable="true"> 
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

    if(this.header === 'Заголовок' && this.mainText === 'Нет текста') {
      clearForm(formHeaderTextarea, symbolsCountSpan, formMainTextarea);
    }
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

class DeletedNote extends Note {
  static days = ['дней', 'день', 'дня', 'дня', 'дня', 'дней', 'дней', 'дней', 'дней', 'дней'];

  _daysBeforeVanishing = 0;

  constructor(headerText, mainText, creationDate, deletionDate) {
    super(headerText, mainText, creationDate);
    this._deletionDate = deletionDate;
    this._body = `
      <article class="deleted-note" draggable="true"> 
        <p class="note-header">${this.header}</p>
        <span class="change-flex-direction-span">
          <i class="fa-solid fa-fire"></i>
        </span>
        <p class="note-text">${this.mainText}</p> 
        <p class="note-date"> До исчезновения ${this.showDaysBeforeVanishing()} ${this.showCorrectDays()}</p>
      </article>`;
  }

  static compareDeletedNotes(firstNote, secondNote) {
    return secondNote.showDaysBeforeVanishing() - firstNote.showDaysBeforeVanishing();
  }

  showDaysBeforeVanishing() {
    let daysBeforeVanishing = 0;
    let cloneOfDate = new Date(this.deletionDate);
    let vanishingDate = new Date( this.deletionDate.setDate( this.deletionDate.getDate() + 30 ) );
  
    while(Number(vanishingDate) > Number(cloneOfDate)) {
      cloneOfDate.setDate( cloneOfDate.getDate() + 1 );

      daysBeforeVanishing++;
    }

    this._daysBeforeVanishing = daysBeforeVanishing;

    return daysBeforeVanishing;
  }

  showCorrectDays() {
    return DeletedNote.days[ (10 <= this.daysBeforeVanishing && this.daysBeforeVanishing < 20) ? 9 : String(this.daysBeforeVanishing).at(-1) ];
  }

  refreshBody() {
    this._body = `
    <article class="deleted-note" draggable="true"> 
      <p class="note-header">${this.header}</p>
      <span class="change-flex-direction-span">
        <i class="fa-solid fa-fire"></i>
      </span>
      <p class="note-text">${this.mainText}</p> 
      <p class="note-date"> До исчезновения ${this.showDaysBeforeVanishing()} ${this.showCorrectDays()}</p>
    </article>`;
  }

  get deletionDate() {
    return (this._deletionDate instanceof Date) ? this._deletionDate : new Date(this._deletionDate);
  }

  get daysBeforeVanishing() {
    return this._daysBeforeVanishing;
  }
}