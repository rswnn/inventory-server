'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangSchema extends Schema {
  up () {
    this.create('barangs', (table) => {
      table.increments()
      table.string('KD_BRG', 254).notNullable().unique()
      table.string('NAMA_BRG', 254).notNullable().unique()
      table.string('SATUAN', 5).notNullable()
      table.integer('QTY', 10).notNullable()
      table.integer('HARGA', 10)
      table.integer('STOK_MIN',10)
      table.timestamps()
    })
  }

  down () {
    this.drop('barangs')
  }
}

module.exports = BarangSchema
