(function(exports) {

  function NoteListView() {
  }

  NoteListView.prototype.renderAll = function(noteList) {
    var parsedList;
    if (noteList.returnNotes().length === 0){
        return "You don't have any notes.";
    } else {
      parsedList = this.addListDivAndJoin(noteList.returnNotes());
      return this.addULTags(parsedList);
    }
  };

  NoteListView.prototype.addListDivAndJoin = function (noteArray) {
    return noteArray.map(function(note) {
      return "<li><div>" + note.returnText() + "</div></li>";
    }).join("");
  };

  NoteListView.prototype.addULTags = function(list) {
    return "<ul>" + list + "</ul>";
  }

  exports.NoteListView = NoteListView;
  exports.renderAll = this.renderAll;

})(this);
