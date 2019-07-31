'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoDetailSchema extends Schema {
  up () {
    this.create('po_details', (table) => {
      table.increments()
      table.integer('KT_TRANS', 10).unsigned().references('id').inTable('pos')
      table.integer('KD_BRG', 10).unsigned().references('id').inTable('Barangs')
      table.string('QTY', 5).notNullable()
      table.string('HARGA', 5).notNullable()
      table.integer('DISC', 10).notNullable()
      table.integer('TOTAL_DISC', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('po_details')
  }
}

module.exports = PoDetailSchema
