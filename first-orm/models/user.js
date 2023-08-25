'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({useraddress}) {
      // define association here
      this.hasMany(useraddress, { foreignKey: 'user_id' });
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING, 
    createdAt: {
      type: DataTypes.DATE, 
      defaultValue: new Date()
    },
    updatedAt: {
      type: DataTypes.DATE, 
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};