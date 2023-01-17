const {Model, DataTypes, Sequelize} = require('sequelize');

const SERVICES_TABLE = require('./services.model');
const CLIENTS_TABLE = require('./clients.model');

const SUBSCRIPTIONS_TABLE = 'subscriptions';

const SubscriptionsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  startDate: {
    field: "start_date",
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  endDate: {
    field: "end_date",
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  nextCharge: {
    field: "next_charge",
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  idService: {
    field: "id_service",
    allowNull: false,
    type: DataTypes.INTEGER,
    References: {
      model: SERVICES_TABLE,
      key:'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idclient: {
    field: "id_client",
    allowNull: false,
    type: DataTypes.INTEGER,
    References: {model: CLIENTS_TABLE, key:'id'},
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Subscriptions extends Model {
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SUBSCRIPTIONS_TABLE,
      modelName: 'Subscriptions',
      timestamps: false
    }
  }
}

module.exports = {SUBSCRIPTIONS_TABLE, SubscriptionsSchema, Subscriptions};