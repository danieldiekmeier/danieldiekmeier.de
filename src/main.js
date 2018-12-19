/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle (a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

var descriptions = shuffle([
  'Mensch',
  'Softwareentwickler',
  'Front End Entwickler',
  'toller Hecht',
  'Tausendsassa',
  'Weltbürger',
  'HTML Ninja'
])

var index = 0

document.documentElement.addEventListener('click', function (event) {
  const isLink = !!event.target.closest('a')

  if (isLink) return

  index = (index + 1) % descriptions.length

  var description = descriptions[index]
  document.querySelector('[data-role="description"]').innerText = description
})
