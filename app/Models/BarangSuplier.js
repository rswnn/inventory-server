'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BarangSuplier extends Model {
    supliers() {
        return this.belongsTo('App/Models/Suplier')
    }

    barangs() {
        return this.belongsTo('App/Models/Barang')
    }
}

module.exports = BarangSuplier
