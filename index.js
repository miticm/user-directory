const renderColor = function(favoriteColor){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

const renderListItem = function(text){
  const listItem = document.createElement('li')
  listItem.textContent = text
  return listItem
}

const renderList = function(userName,age,favoriteColor){
  const list = document.createElement('ul')
  const nameItem = renderListItem(`Name: ${userName}`)
  const ageItem = renderListItem(`Age: ${age}`)
  const colorItem = renderListItem('Favorite Color: ')
  colorItem.appendChild(renderColor(favoriteColor))
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)
  return list
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = renderList(userName,age,favoriteColor)

  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

const form = document.querySelector('#userForm')
form.addEventListener('submit', handleSubmit)