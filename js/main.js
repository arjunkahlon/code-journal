var $photoURl = document.querySelector('#photo-url');
var $photoPlaceholder = document.querySelector('#placeholder-image');
$photoURl.addEventListener('input', handlePhotoInput);

var $entryForm = document.querySelector('#journal-entry-form');
$entryForm.addEventListener('submit', handleSubmit);

var $noEntries = document.querySelector('.no-entries');

// Submission Event Handle

function handleSubmit(event) {
  event.preventDefault();
  var journalEntry = {};
  journalEntry.title = $entryForm.elements.title.value;
  journalEntry.photoURL = $entryForm.elements.photoUrl.value;
  journalEntry.notes = $entryForm.elements.notes.value;
  journalEntry.entryID = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(journalEntry);
  resetPlaceholder($photoPlaceholder);
  $entryForm.reset();
  renderLatestEntry();
  viewSwap('entries');
  data.view = 'entries';
}

// Placeholder Handling

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

// Dom Creation Functionality

window.addEventListener('DOMContentLoaded', renderEntries);

function createEntryTree(entry) {
  var entryLi = document.createElement('li');
  entryLi.setAttribute('class', 'list-entry');
  entryLi.setAttribute('data-entry-id', entry.entryID);

  var rootDiv = document.createElement('div');
  rootDiv.setAttribute('class', 'row');
  entryLi.appendChild(rootDiv);

  var colHalf1 = document.createElement('div');
  colHalf1.setAttribute('class', 'column-half');
  rootDiv.appendChild(colHalf1);

  var imgWrap = document.createElement('div');
  imgWrap.setAttribute('class', 'image-container');
  colHalf1.appendChild(imgWrap);

  var image = document.createElement('img');
  image.setAttribute('src', entry.photoURL);
  imgWrap.appendChild(image);

  var colHalf2 = document.createElement('div');
  colHalf2.setAttribute('class', 'column-half');
  rootDiv.appendChild(colHalf2);

  var entryWrap = document.createElement('div');
  entryWrap.setAttribute('class', 'entry-wrapper');
  colHalf2.appendChild(entryWrap);

  var titleRow = document.createElement('div');
  titleRow.setAttribute('class', 'row');
  entryWrap.appendChild(titleRow);

  var colTitle = document.createElement('div');
  colTitle.setAttribute('class', 'column-90');
  titleRow.appendChild(colTitle);

  var entryTitle = document.createElement('h2');
  entryTitle.setAttribute('class', 'font-open-sans text-bold font-size-large');
  entryTitle.textContent = entry.title;
  colTitle.appendChild(entryTitle);

  var colIcon = document.createElement('div');
  colIcon.setAttribute('class', 'column-10');
  titleRow.appendChild(colIcon);

  var editIcon = document.createElement('i');
  editIcon.classList = 'edit-icon fa fa-pencil purple';
  colIcon.append(editIcon);

  var entryNotes = document.createElement('p');
  entryNotes.setAttribute('class', 'font-open-sans');
  entryNotes.textContent = entry.notes;
  entryWrap.appendChild(entryNotes);

  return entryLi;
}

function renderLatestEntry() {
  var $renderedList = document.querySelector('.entries-list');
  var latestEntry = createEntryTree(data.entries[0]);
  $renderedList.prepend(latestEntry);
}

function renderEntries() {
  if (data.entries.length === 0) {
    $noEntries.classList.remove('hidden');
    return;
  }
  var $entryList = document.querySelector('.entries-list');
  for (let i = 0; i < data.entries.length; i++) {
    var createdEntry = createEntryTree(data.entries[i]);
    $entryList.appendChild(createdEntry);
  }
}

// Views Handling
var views = document.querySelectorAll('.view');

var $entriesNav = document.querySelector('#nav-entries');
$entriesNav.addEventListener('click', viewEntries);

var $entryNew = document.querySelector('#new-entry-button');
$entryNew.addEventListener('click', viewEntryForm);

function viewEntries(event) {
  viewSwap('entries');
  data.view = 'entries';
}

function viewEntryForm(event) {
  viewSwap('entry-form');
  data.view = 'entry-form';
}

function viewSwap(view) {
  for (let i = 0; i < views.length; i++) {
    if (view === views[i].getAttribute('data-view')) {
      views[i].classList.remove('hidden');
    } else {
      views[i].classList.add('hidden');
    }
  }
}
loadCurrentView();

function loadCurrentView() {
  viewSwap(data.view);
}

// Edit Handling

var $entriesList = document.querySelector('.entries-list');
// console.log($entriesList);

$entriesList.addEventListener('click', clickList);

function clickList(event) {
  // console.log('Clicked work');
}
