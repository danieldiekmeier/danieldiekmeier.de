document.querySelectorAll('a').forEach(element => {
  const html = element.textContent
    .split('')
    .map((letterOrSpace, index, letters) => {
      const delay = index * 100 - letters.length * 100

      const letter = letterOrSpace === ' ' ? '&nbsp;' : letterOrSpace

      return `<span style="animation-delay: ${delay}ms">${letter}</span>`
    })
    .join('')

  element.innerHTML = html
})
