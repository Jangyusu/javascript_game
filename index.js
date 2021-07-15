function Baseball() {
  const user = setUser('Tome')

  console.log(user)
}

function setUser(name, age) {
  this.name = name || 'Guest'
  this.age = age
}