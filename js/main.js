var $photoURl = document.querySelector('#photo-url');
var $photoPlaceholder = document.querySelector('#placeholder-image');
$photoURl.addEventListener('input', handlePhotoInput);

var $entryForm = document.querySelector('#journal-entry-form');
$entryForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var journalEntry = {};
  journalEntry.title = $entryForm.elements.title.value;
  journalEntry.photoURL = $entryForm.elements.photoUrl.value;
  journalEntry.notes = $entryForm.elements.notes.value;
  journalEntry.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(journalEntry);
  resetPlaceholder($photoPlaceholder);
  $entryForm.reset();
}

function handlePhotoInput(event) {
  if (event.target.value) {
    $photoPlaceholder.setAttribute('src', $photoURl.value);
  } else {
    resetPlaceholder($photoPlaceholder);
  }
}

function resetPlaceholder(placeholder) {
  placeholder.setAttribute('src', './images/placeholder-image-square.jpg');
}
