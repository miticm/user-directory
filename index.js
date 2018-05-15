const headings = document.querySelectorAll('h1')
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    headings[1].textContent = form.change.value
    form.reset()
})
