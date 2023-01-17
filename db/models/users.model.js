const {Model, DataTypes, Sequelize} = require('sequelize');

const USERS_TABLE = 'users';

const UsersSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  }

}

class Users extends Model {
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: false
    }
  }
}

module.exports = {USERS_TABLE, UsersSchema, Users};
