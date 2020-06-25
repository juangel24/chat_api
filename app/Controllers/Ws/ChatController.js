'use strict'
const Message = use('App/Models/Message')

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  async onMessage(data) {
    try {
      console.log(data);
    
      const msg = new Message()
      msg.text = data.text
      msg.sender_id = data.sender_id
      await msg.save()

      let user = await msg.user().fetch()
      msg.username = user.username
      console.log(msg);
      
      this.socket.broadcastToAll('message', msg)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ChatController
