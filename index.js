import user from './user'

function Baseball() {
  console.log(user)
  this.users = []
  this.ready = false

  this.setUser = (name) => {
    this.users.push(name)
    this.ready = true
    console.log('ready to game')
  }

  this.startGame = () => {
    
  }
}