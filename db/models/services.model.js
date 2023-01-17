const {Model, DataTypes, Sequelize} = require('sequelize');

const SERVICES_TABLE = 'services';

const ServicesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  periodicity: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cost: {
    allowNull: false,
    type: DataTypes.DOUBLE
  }
}

class Services extends Model {
  static associate(models){
    this.hasMany(models.Subscriptions, {
      as: 'subscriptions',
      foreignKey: 'idService'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SERVICES_TABLE,
      modelName: 'Services',
      timestamps: false
    }
  }
}

module.exports = {SERVICES_TABLE, ServicesSchema, Services};
