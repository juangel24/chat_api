'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Encryption = use('Encryption')

class Message extends Model {
  user () {
    return this.belongsTo('App/Models/User', 'sender_id')
  }

  /*static boot () {
    super.boot()

    this.addHook('beforeSave', async (messageInstance) => {
      messageInstance.text = await Encryption.encrypt(messageInstance)
    })
  }*/
}

module.exports = Message
