const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  users.innerHTML += '<p>' + ev.target.userName.value + '</p>'
  ev.target.userName.value = ''
}

form.addEventListener('submit', handleSubmit)