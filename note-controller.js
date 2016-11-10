(function(exports) {
	function NoteController(noteList) {
		this.noteList = noteList;
		this.noteListView = new NoteListView(this.noteList);
	}

	NoteController.prototype.something = function(first_argument) {
		console.log("success");
	};

	NoteController.prototype.displayNotes = function() {
		appDiv = document.getElementById('app');
		appDiv.innerHTML = this.noteListView.notesString();
	};

	window.addEventListener("hashchange", function(event) {
		event.preventDefault();
		if (window.location.hash === "") {
			noteController.displayNotes();
		} else {
			new SingleNoteView(noteController.noteList.notes[getIdFromUrl()]).display();
		}
	});

	function getIdFromUrl() {
		return window.location.hash.split("#")[1].split("/")[1]
	}

	exports.NoteController = NoteController;
})(this);
	
