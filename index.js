const headings = document.querySelectorAll('h1')

for(let i = 0; i < headings.length;i++){
    headings[i].addEventListener('click',function changeText() {
        headings[i].textContent = 'Bye'
    })
}
