'use strict'
const Message = use('App/Models/Message')

class MessageController {
  async index({ params }) {
    const cant = parseInt(params.cant)
    let query = Message.query().select('messages.*', 'users.username')
    .innerJoin('users', 'users.id', 'messages.sender_id')
    .orderBy('messages.created_at', 'desc')

    if (cant) { query.limit(cant) }

    return query.fetch()
  }
}

module.exports = MessageController
