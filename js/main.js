var $photoURl = document.querySelector('#photo-url');
var $photoPlaceholder = document.querySelector('#placeholder-image');
$photoURl.addEventListener('input', handlePhotoInput);

function handlePhotoInput(event) {
  if (event.target.value) {
    $photoPlaceholder.setAttribute('src', $photoURl.value);
  } else {
    $photoPlaceholder.setAttribute('src', './images/placeholder-image-square.jpg');
  }
}
