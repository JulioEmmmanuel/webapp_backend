const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');
const bcrypt = require('bcrypt');

class UsersService {

  constructor(){
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async findByUsername(username) {
    const client = await models.Users.findOne({
      where: {username}
    });
    return client;
  }

  async findByEmail(email) {
    const client = await models.Users.findOne({
      where: {email}
    });
    return client;
  }


}

module.exports = UsersService;
