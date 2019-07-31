'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Suplier extends Model {
    supliers() {
        return this.belongsToMany('App/Models/Suplier').pivotTable('BARANG_SUPLIERS')
    }
}

module.exports = Suplier
