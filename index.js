const button = document.querySelector('button.greeting')

function changeText(ev) {
    ev.target.textContent = 'Clickty click'
}

button.addEventListener('click', changeText)
