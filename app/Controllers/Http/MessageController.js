'use strict'
const Message = use('App/Models/Message')

class MessageController {
  async index({ params }) {
    const cant = parseInt(params.cant)
    let msgQuery = Message.query().select('text', 'messages.created_at', 'users.username')
    .innerJoin('users', 'users.id', 'messages.sender_id')
    .orderBy('messages.created_at', 'desc')

    if (cant) { msgQuery.limit(cant) }

    return msgQuery.fetch()
  }
}

module.exports = MessageController
