'use strict'
const users_array = []

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage(data) {
    this.socket.broadcast('message', data)
    console.log(this.socket.id);
    console.log(data);
  }

  onNewUser(user){
    console.log(user);
    
    if (user.length !== null || user.length !== '' || user.length !== 0) {
      users_array.push(user)
      this.socket.broadcast('newUser', users_array)
      console.log(users_array)
    }
  }
}

module.exports = ChatController
