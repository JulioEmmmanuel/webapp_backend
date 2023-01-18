const UserService = require('./users.service');
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {config} = require('./../config/config');

const service = new UserService();


class AuthService{

  constructor(){

  }

  async getUser(username, password){
    let user = await service.findByUsername(username);

    if(!user){
      user = await service.findByEmail(username);
      if(!user){
        throw boom.unauthorized();
      }
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user){
    const payload = {
      sub: user.id,
    }

    const token = jwt.sign(payload, config.jwtSecret);

    return {user, token};
  }



}

module.exports = AuthService;
