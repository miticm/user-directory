const heading = document.querySelector('#second')

const button = document.querySelector('button.greeting')

function changeText() {
    heading.textContent = 'New second heading!'
}

button.addEventListener('click', changeText)
