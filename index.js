const heading = document.querySelector('h1')
const button = document.querySelector('button.greeting')
function changeText() {
    heading.textContent = 'New heading!'
}

button.addEventListener('click', changeText)
