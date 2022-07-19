/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntries = localStorage.getItem('entries-local-storage');
if (previousEntries != null) {
  data = JSON.parse(previousEntries);
}

window.addEventListener('beforeunload', storeEntries);

function storeEntries() {
  var saveEntries = JSON.stringify(data);
  localStorage.setItem('entries-local-storage', saveEntries);
}
