var descriptions = [
  'Programmierer',
  'Mensch',
  'Softwareentwickler',
  'Front End Entwickler',
  'toller Hecht',
  'Tausendsassa'
];

var prevIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('html').addEventListener('click', function () {
    var nextIndex = prevIndex
    while (prevIndex === nextIndex) {
      nextIndex = Math.floor(Math.random() * descriptions.length);
    }
    prevIndex = nextIndex

    var description = descriptions[nextIndex];
    document.querySelector('[data-role="description"]').innerText = description
  })
})
