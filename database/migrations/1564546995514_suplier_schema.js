'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SuplierSchema extends Schema {
  up () {
    this.create('supliers', (table) => {
      table.increments()
      table.string('KD_SUP', 254).notNullable().unique()
      table.string('NAMA_SUP', 254).notNullable().unique()
      table.string('ALAMAT', 5).notNullable()
      table.string('KOTA', 5).notNullable()
      table.integer('TELP', 12).notNullable()
      table.string('EMAIL', 10)
      table.string('PIC',10)
      table.timestamps()
    })
  }

  down () {
    this.drop('supliers')
  }
}

module.exports = SuplierSchema
