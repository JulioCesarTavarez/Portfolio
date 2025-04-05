// Function to save notes to localStorage
export function saveNotesToLocalStorage(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to load and display notes from localStorage when the page loads
function loadNotesFromStorage() {
    const notesData = localStorage.getItem("notes");
    if (notesData) {
        const notes = JSON.parse(notesData);
        notes.forEach(note => {
            createNoteElement(note); // Render each note using your helper function
        });
    }
}

// Function to handle creating a new note and saving it
export function loadMadeNotes(event) {
    event.preventDefault(); // Prevent form submission

    const noteTitle = document.getElementById("note_title");
    const noteText = document.getElementById("note_text");

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    const newNote = {
        title: noteTitle.value,
        text: noteText.value,
        id: `stickyNote${noteCount}`,
    };

    notes.push(newNote);
    saveNotesToLocalStorage(notes);
    createNoteElement(newNote);

    noteTitle.value = "";
    noteText.value = "";
}

// Function to delete a note
function deleteNote(noteId) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.filter(note => note.id !== noteId);
    saveNotesToLocalStorage(notes);
    document.getElementById(noteId).remove();
}


