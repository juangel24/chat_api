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

    this.socket.broadcast('message', msg)
  }
}

module.exports = ChatController
