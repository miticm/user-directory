const heading = document.querySelector('h1')

const inputTextfield = document.querySelector('input')

function changeText(ev) {
    heading.textContent = inputTextfield.value
}

inputTextfield.addEventListener('keyup', changeText)
