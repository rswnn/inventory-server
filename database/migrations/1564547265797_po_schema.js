'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoSchema extends Schema {
  up () {
    this.create('pos', (table) => {
      table.increments()
      table.string('KT_TRANS', 254).notNullable().unique()
      table.string('TGL_TRANS', 254).notNullable().unique()
      table.string('KD_SUB', 5).notNullable()
      table.string('USERID', 5).notNullable()
      table.integer('TOTAL_ITEM', 10).notNullable()
      table.integer('TOTAL_HARGA', 20)
      table.integer('DISCOUNT',20)
      table.timestamps()
    })
  }

  down () {
    this.drop('pos')
  }
}

module.exports = PoSchema
