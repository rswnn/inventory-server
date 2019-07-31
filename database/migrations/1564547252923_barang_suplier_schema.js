'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangSuplierSchema extends Schema {
  up () {
    this.create('barang_supliers', (table) => {
      table.increments()
      table.integer('KD_BRG', 10).unsigned().references('id').inTable('Barangs')
      table.integer('KD_SUP', 10).unsigned().references('id').inTable('Supliers')
      table.integer('HARGA', 20).notNullable()
      table.integer('DISC', 5).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('barang_supliers')
  }
}

module.exports = BarangSuplierSchema
