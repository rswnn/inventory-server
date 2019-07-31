'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Barang extends Model {
    barangs() {
        return this.belongsToMany('App/Models/Barang').pivotTable('BARANG_SUPLIERS')
    }
}

module.exports = Barang
