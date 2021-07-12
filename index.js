function Baseball() {
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