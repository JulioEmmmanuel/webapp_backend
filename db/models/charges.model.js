const {Model, DataTypes, Sequelize} = require('sequelize');

const CHARGES_TABLE = 'charges';
const SUBSCRIPTIONS_TABLE = require('./subscriptions.model');


const ChargesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    field: "start_date",
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  idSubscription: {
    field: "id_subscription",
    allowNull: false,
    type: DataTypes.INTEGER,
    References: {model: SUBSCRIPTIONS_TABLE, key:'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Charges extends Model {
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CHARGES_TABLE,
      modelName: 'Charges',
      timestamps: false
    }
  }
}

module.exports = {CHARGES_TABLE, ChargesSchema, Charges};
