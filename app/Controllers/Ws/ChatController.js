'use strict'
const Message = use('App/Models/Message')
const users_array = []
const users_messsages = []

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onMessage(data) {
    const msg = new Message()
    msg.text = data.text
    msg.sender_id = data.sender_id
    await msg.save()

    let user = await msg.user().fetch()
    msg.username = user.username
    users_messsages.push(msg)
    console.log(msg.$attributes);
    
    this.socket.broadcast('message', users_messsages)
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
