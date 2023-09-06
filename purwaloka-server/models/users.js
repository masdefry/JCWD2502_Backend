'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      validate: {
        isEmail: {msg: 'Email Not Valid!'}
      }
    },
    password: DataTypes.STRING,
    is_verified: {
      type: DataTypes.STRING, 
      defaultValue: 'Unverified'
    },
    code: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};