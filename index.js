const form = document.querySelector('#userForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`

  const ageItem = document.createElement('li')
  ageItem.textContent = `age: ${age}`
  
  const list = document.createElement('ul')   
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.style.backgroundColor = favoriteColor

  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)