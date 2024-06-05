function deleteGarbage(arrayOfNotes) {
  arrayOfNotes.forEach(note => {
    if(note.showDaysBeforeVanishing() == 0) arrayOfNotes.splice( arrayOfNotes.indexOf(note), 1);
  })
}