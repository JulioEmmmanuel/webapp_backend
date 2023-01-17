const {Model, DataTypes, Sequelize} = require('sequelize');

const CLIENTS_TABLE = 'clients';

const ClientsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    field: "last_name",
    allowNull: false,
    type: DataTypes.STRING,
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING
  }

}

class Clients extends Model {
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CLIENTS_TABLE,
      modelName: 'Clients',
      timestamps: false
    }
  }
}

module.exports = {CLIENTS_TABLE, ClientsSchema, Clients};
