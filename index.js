const form = document.querySelector('form')

const heading = document.querySelector('h1')

const input = document.querySelector('input')

function changeText(ev) {
    ev.preventDefault();
    heading.textContent = input.value
    form.reset();
}

form.addEventListener('submit', changeText)
