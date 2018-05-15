const headings = document.querySelectorAll('h1')
const btn = document.querySelector('button')
const form = document.querySelector('form')
const input = document.querySelector('input')
// for(let i = 0; i < headings.length;i++){
//     headings[i].addEventListener('click',function changeText() {
//         headings[i].textContent = 'Bye'
//     })
// }
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    headings[1].textContent = input.value
    form.reset()
})
