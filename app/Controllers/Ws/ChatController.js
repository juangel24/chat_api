'use strict'
const Message = use('App/Models/Message')
const users_array = []

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onMessage(data) {
    const msg = new Message()

    msg.text = data.text
    msg.sender_id = data.sender_id
    msg.save()

    this.socket.broadcastToAll('data', await Message.pickInverse(50))
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
